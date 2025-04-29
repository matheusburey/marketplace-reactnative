interface IUser {
	id: number;
	username: string;
	email: string;
	password: string;
	phone: string;
}

interface IRegisterUserParams {
	username: string;
	email: string;
	password: string;
}

interface ILoginParams {
	username: string;
	password: string;
}
