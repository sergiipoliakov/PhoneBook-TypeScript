import { AppDispatch } from "../../store";
import axios from "axios";
import { IUser } from "../../../models/IUser";
import { userSlice } from "./UserSlice";

interface Credentials {
	name?: string;
	email: string;
	password: string;
}

// const credentials: Credentials = {
// 	email: "sergii22@mail.com",
// 	password: "1234567",
// };

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
const token = {
	set(token: string): void {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = "";
	},
};

export const fetchUser = (credentials: Credentials) => async (
	dispatch: AppDispatch
) => {
	try {
		dispatch(userSlice.actions.userLoginRequest());
		const response = await axios.post<IUser>("/users/login", credentials);
		token.set(response.data.token);
		dispatch(userSlice.actions.userLoginSucces(response.data));
	} catch (e: any) {
		dispatch(userSlice.actions.userLoginError(e.message));
	}
};

export const registerUser = (credentials: Credentials) => async (
	dispatch: AppDispatch
) => {
	try {
		dispatch(userSlice.actions.userRegisterRequest());
		const response = await axios.post<IUser>("/users/signup", credentials);
		dispatch(userSlice.actions.userRegisterSuccess(response.data));
	} catch (error: any) {
		dispatch(userSlice.actions.userRegisterError(error.message));
	}
};

export const getCurrentUser = () => async (
	dispatch: AppDispatch,
	getState: () => { auth: any }
) => {
	const { auth } = getState();
	const { token: persistedToken } = auth.user;
	if (!persistedToken) {
		return;
	}

	token.set(persistedToken);
	dispatch(userSlice.actions.getCurrentUserRequest());
	try {
		await axios.get("/users/current");
		dispatch(userSlice.actions.getCurrentUserSuccess());
	} catch (error: any) {
		dispatch(userSlice.actions.getCurrentUserError(error.message));
	}
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.logoutUserRequest());
		await axios.post("/users/logout");
		dispatch(userSlice.actions.logoutUserSuccess());
	} catch (error: any) {
		dispatch(userSlice.actions.logoutUserError(error.message));
	}
};
