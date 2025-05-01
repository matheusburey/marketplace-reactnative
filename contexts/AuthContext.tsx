import * as SecureStore from "expo-secure-store";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import { getProfile, loginService, postUser } from "../services/user";

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

	async function login(params: ILoginParams) {
		const res = await loginService(params);
		const token = res.access_token;

		const resUser = await getProfile(token);

		setState((e) => ({
			...e,
			user: resUser,
			token,
		}));
		await SecureStore.setItemAsync("marketplace-token", token);
		await SecureStore.setItemAsync("marketplace-user", JSON.stringify(resUser));
	}

	async function register(params: IRegisterUserParams) {
		const resUser = await postUser(params);
		const res = await loginService({
			email: params.email,
			password: params.password,
		});

		setState((e) => ({
			...e,
			user: resUser,
			token: res.access_token,
		}));

		await SecureStore.setItemAsync("marketplace-token", res.access_token);
		await SecureStore.setItemAsync("marketplace-user", JSON.stringify(resUser));
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
