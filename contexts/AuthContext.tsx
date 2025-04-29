import * as SecureStore from "expo-secure-store";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import { getUserData, loginService, registerUser } from "../services/user";
import { Alert } from "react-native";

interface IAuthState {
	user: IUser | null;
	token: string | null;
	isLoading: boolean;
	isSignout: boolean;
}

interface IAuthContext extends IAuthState {
	register: (params: IRegisterUserParams) => Promise<void>;
	logout: () => void;
	login: (params: ILoginParams) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
	const [state, setState] = useState<IAuthState>({
		isLoading: true,
		user: null,
		token: null,
		isSignout: false,
	});

	useEffect(() => {
		const bootstrapAsync = async () => {
			let storeToken: string | null = null;
			let currentUser: IUser | null = null;

			try {
				storeToken = await SecureStore.getItemAsync("marketplace-token");
				const userDataString =
					await SecureStore.getItemAsync("marketplace-user");

				if (userDataString) {
					currentUser = JSON.parse(userDataString);
				}
			} catch (e) {
				console.log(e);
			}
			setState((e) => ({ ...e, token: storeToken, user: currentUser }));
		};
		bootstrapAsync();
	}, []);

	async function manageIdentity(username: string, id?: number) {
		type Identity = { [username: string]: number };
		const KEY = "marketplace-identity";

		const listIdentity = await SecureStore.getItemAsync(KEY);

		if (listIdentity && id) {
			const identities: Identity = JSON.parse(listIdentity);
			identities[username] = id;
			await SecureStore.setItemAsync(KEY, JSON.stringify(identities));
			return;
		}

		if (listIdentity && !id) {
			const identities: Identity = JSON.parse(listIdentity);
			return identities[username];
		}

		if (!listIdentity && id) {
			const identities = { [username]: id };

			await SecureStore.setItemAsync(KEY, JSON.stringify(identities));
			return;
		}
	}

	async function login(params: ILoginParams) {
		const res = await loginService(params);

		const userId = await manageIdentity(params.username);
		const resUser = await getUserData(userId || 1);

		setState((e) => ({
			...e,
			user: resUser.data,
			token: res.data.token,
		}));
		await SecureStore.setItemAsync("marketplace-token", res.data.token);
		await SecureStore.setItemAsync(
			"marketplace-user",
			JSON.stringify(resUser.data),
		);
	}

	async function register(params: IRegisterUserParams) {
		const dataUser = await registerUser(params);

		const res = await loginService({
			username: params.username,
			password: params.password,
		});

		setState((e) => ({
			...e,
			user: dataUser.data,
			token: res.data.token,
		}));

		await manageIdentity(params.username, dataUser.data.id);
		await SecureStore.setItemAsync("marketplace-token", res.data.token);
		await SecureStore.setItemAsync(
			"marketplace-user",
			JSON.stringify(dataUser.data),
		);
	}

	async function logout() {
		await SecureStore.deleteItemAsync("marketplace-token");
		await SecureStore.deleteItemAsync("marketplace-user");
		setState((e) => ({ ...e, token: null, user: null }));
	}

	return (
		<AuthContext.Provider value={{ ...state, login, logout, register }}>
			{children}
		</AuthContext.Provider>
	);
}
