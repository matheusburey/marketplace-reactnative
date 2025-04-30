interface IUser {
	id: number;
	username: string;
	email: string;
	password: string;
	phone: string;
}

interface IRegisterUserParams {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

interface ILoginParams {
	email: string;
	password: string;
}
