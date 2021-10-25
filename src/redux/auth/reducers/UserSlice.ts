import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface UserState {
	user: IUser;
	isLoading: boolean;
	error: string;
	isAuthenticated: boolean;
}

const initialState: UserState = {
	user: {
		token: "",
		user: {
			name: "",
			email: "",
		},
	},
	isAuthenticated: false,
	isLoading: false,
	error: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLoginRequest(state) {
			state.isLoading = true;
			state.isAuthenticated = false;
		},
		userLoginSucces(state, action: PayloadAction<IUser>) {
			state.isLoading = false;
			state.error = "";
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		userLoginError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
		userRegisterRequest(state) {
			state.isLoading = true;
			state.isAuthenticated = false;
		},
		userRegisterSuccess(state, action: PayloadAction<IUser>) {
			state.isLoading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
			state.error = "";
		},
		userRegisterError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
		getCurrentUserRequest(state) {
			state.isLoading = true;
			state.isAuthenticated = false;
		},
		getCurrentUserSuccess(state) {
			state.isLoading = false;
			state.error = "";

			state.isAuthenticated = true;
		},
		getCurrentUserError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
		logoutUserRequest(state) {
			state.isLoading = true;
			// state.isAuthenticated = false;
		},
		logoutUserSuccess(state) {
			state.isLoading = false;
			state.error = "";
			state.isAuthenticated = false;
		},
		logoutUserError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
			state.isAuthenticated = false;
		},
	},
});
export default userSlice.reducer;
