import { api } from "./api";

export async function getUserData(userID: number) {
	return api.get(`/users/${userID}`);
}

export async function registerUser(params: IRegisterUserParams) {
	return await api.post("/users", params);
}

export async function loginService(params: ILoginParams) {
	return api.post("/auth/login", params);
}
