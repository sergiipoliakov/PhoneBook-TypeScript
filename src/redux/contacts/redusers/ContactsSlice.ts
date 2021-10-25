import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContacts } from "../../../models/IContacts";

interface ContactsSlice {
	constacts: IContacts[];
	isLoading: boolean;
	filter: string;
	error: string;
}

const initialState: ContactsSlice = {
	constacts: [],
	filter: "",
	isLoading: false,
	error: "",
};

export const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		fetchContactsRequest(state) {
			state.isLoading = true;
		},
		fetchContactsSucces(state, action: PayloadAction<IContacts[]>) {
			state.isLoading = false;
			state.error = "";
			state.constacts = action.payload;
		},
		fetchContactsError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		addContactRequest(state) {
			state.isLoading = true;
		},
		addContactSuccess(state, action: PayloadAction<IContacts>) {
			state.isLoading = false;
			state.constacts = [...state.constacts, action.payload];
			state.error = "";
		},
		addContactError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		deleteContactRequest(state) {
			state.isLoading = true;
		},
		deleteContactSuccess(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.constacts = state.constacts.filter(
				(contact) => contact.id !== action.payload
			);
			state.error = "";
		},
		deleteContactError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		changeFilter(state, action: PayloadAction<string>) {
			state.filter = action.payload;
		},
		editContactRequest(state) {
			state.isLoading = true;
		},
		editContactSuccess(state, action: PayloadAction<IContacts>) {
			state.isLoading = false;
			state.constacts = [
				...state.constacts.filter(
					(contact) => contact.id !== action.payload.id
				),
				action.payload,
			];
			state.error = "";
		},
		editContactError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
export default contactsSlice.reducer;
