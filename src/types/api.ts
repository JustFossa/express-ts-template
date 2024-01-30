export type Response<T> = {
	success: boolean;
	code: number;
	message: string;
	data: T | null;
};

export type User = {
	id: number;
	username: string;
};
