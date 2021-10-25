import { useEffect } from "react";
import ContactList from "../components/contacts/ContactList/ContactList.tsx";
import ContactsEditor from "../components/contacts/ContactsEditor/ContactsEditor";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { fetchAllContacts } from "../redux/contacts/redusers/ActionCreaters";
import MainContainer from "../components/UI/MaineContainer/MainContainer";

import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((thema) => ({
	root: {
		zIndex: 5,
		color: "white",
	},
}));

export default function PhonebookPage() {
	const styles = useStyles();

	const dispatch = useAppDispatch();
	const { constacts, isLoading } = useAppSelector(
		(state) => state.contactsReducer
	);

	useEffect(() => {
		dispatch(fetchAllContacts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MainContainer>
			<ContactsEditor />
			<ContactList items={constacts} />
			<Backdrop className={styles.root} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</MainContainer>
	);
}
