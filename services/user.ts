import { api } from "./api";

export async function getProfile(jwt: string) {
	return api.get("/auth/profile", {
		headers: { Authorization: `Bearer ${jwt}` },
	});
}

export async function getUserData(userID: number) {
	return api.get(`/users/${userID}`);
}

export async function registerUser(params: IRegisterUserParams) {
	return await api.post("/users", params);
}

export async function loginService(params: ILoginParams) {
	return api.post("/auth/login", params);
}

export async function RefreshingToken(refreshToken: string) {
	return api.post("/auth/refresh-token", { refreshToken });
}
