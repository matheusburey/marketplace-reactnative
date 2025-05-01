import { api } from "./api";

export async function getProfile(jwt: string): Promise<IUser> {
	const res = await api.get("/auth/profile", {
		headers: { Authorization: `Bearer ${jwt}` },
	});
	return res.data;
}

export async function getUserData(userID: number): Promise<IUser> {
	const res = await api.get(`/users/${userID}`);
	return res.data;
}

export async function postUser(params: IRegisterUserParams): Promise<IUser> {
	const res = await api.post("/users", params);
	return res.data;
}

export async function loginService(
	params: ILoginParams,
): Promise<IResponseLoginData> {
	const res = await api.post("/auth/login", params);
	return res.data;
}

export async function RefreshingToken(
	refreshToken: string,
): Promise<IResponseLoginData> {
	const res = await api.post("/auth/refresh-token", { refreshToken });
	return res.data;
}
