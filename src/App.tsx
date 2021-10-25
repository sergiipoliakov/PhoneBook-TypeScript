import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getCurrentUser } from "./redux/auth/reducers/ActionCreaters";
// import { fetchAllContacts } from "./redux/contacts/redusers/ActionCreaters";

import Header from "./components/Header";
import Router from "./router/Router";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((thema) => ({
	root: {
		zIndex: 5,
		color: "white",
	},
}));
function App() {
	const styles = useStyles();

	const dispatch = useAppDispatch();

	const { isLoading } = useAppSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getCurrentUser());
		// dispatch(fetchUser());
		// dispatch(fetchAllContacts());
	}, []);
	return (
		<>
			<Header />

			<Router />
			<Backdrop className={styles.root} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}

export default App;
