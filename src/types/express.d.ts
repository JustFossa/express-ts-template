import { User } from "./api";

declare namespace Express {
	interface Request {
		user: User;
	}
}
