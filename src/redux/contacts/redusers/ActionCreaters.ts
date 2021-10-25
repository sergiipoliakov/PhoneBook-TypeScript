import { AppDispatch } from "../../store";
import axios from "axios";

import { IContacts } from "../../../models/IContacts";
import { contactsSlice } from "./ContactsSlice";

interface Credentials {
	name: string;
	number: string;
}

// axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
// axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTcxZTZiNGM5MGZhOTAwMTc2ODAzNjciLCJpYXQiOjE2MzQ5MDk0MjJ9.ftPL8u8Kq28ZXxfR0m0E_qQOhROGuUh6RQQaiYljQ1U`;

export const fetchAllContacts = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(contactsSlice.actions.fetchContactsRequest());
		const response = await axios.get<IContacts[]>("/contacts");
		dispatch(contactsSlice.actions.fetchContactsSucces(response.data));
	} catch (error: any) {
		dispatch(contactsSlice.actions.fetchContactsError(error.message));
	}
};

export const addContact = (credentials: Credentials) => async (
	dispatch: AppDispatch
) => {
	try {
		dispatch(contactsSlice.actions.addContactRequest());
		const response = await axios.post<IContacts>("/contacts", credentials);
		dispatch(contactsSlice.actions.addContactSuccess(response.data));
	} catch (error: any) {
		dispatch(contactsSlice.actions.addContactError(error.message));
	}
};

export const deleteContact = (id: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(contactsSlice.actions.deleteContactRequest());
		await axios.delete(`/contacts/${id}`);
		dispatch(contactsSlice.actions.deleteContactSuccess(id));
	} catch (error: any) {
		dispatch(contactsSlice.actions.deleteContactError(error.message));
	}
};

export const changeFilter = (filter: string) => (dispatch: AppDispatch) => {
	dispatch(contactsSlice.actions.changeFilter(filter));
};

export const editContact = (id: string, credentials: Credentials) => async (
	dispatch: AppDispatch
) => {
	try {
		dispatch(contactsSlice.actions.editContactRequest());

		const respons = await axios.patch<IContacts>(
			`/contacts/${id}`,
			credentials
		);

		dispatch(contactsSlice.actions.editContactSuccess(respons.data));
	} catch (error: any) {
		dispatch(contactsSlice.actions.editContactError(error.message));
	}
};
