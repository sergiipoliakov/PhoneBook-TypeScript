import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { logoutUser } from "../../redux/auth/reducers/ActionCreaters";

import { IconButton, Typography, makeStyles } from "@material-ui/core";

import { ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	title: {
		margin: theme.spacing(0, 0, 0),
		fontFamily: "Permanent Marker",
		fontSize: "20px",
		color: "deeppink",
		textShadow: "1px 1px darkmagenta",
	},

	flexMenu: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

//
export const UserMenu: React.FC = () => {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth.user);

	return (
		<div className={styles.flexMenu}>
			<Typography className={styles.title}>Welcome {user.name}</Typography>
			<IconButton
				type="button"
				color="inherit"
				onClick={() => {
					dispatch(logoutUser());
				}}
			>
				<ExitToApp />
			</IconButton>
		</div>
	);
};
