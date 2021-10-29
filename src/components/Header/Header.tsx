import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Link, useLocation } from "react-router-dom";

import { Navigation } from "../Navigation/Navigation";

import { Typography, Toolbar, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(0, 0, 0),
		fontFamily: "Permanent Marker",
		fontSize: "40px",
		color: "deeppink",
		textShadow: "1px 1px darkmagenta",
		textDecoration: "none",
	},
	flexContaner: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

export default function Header() {
	const styles = useStyles();
	const location = useLocation();

	const pathName = location.pathname.slice(1);

	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<>
			<AppBar position="static">
				<Toolbar className={styles.flexContaner}>
					<Navigation />
					<Typography
						className={styles.root}
						component={Link}
						to="/"
						variant="h5"
					>
						Phonebook {pathName === "phonebook" ? "Editor" : pathName}
					</Typography>

					{isAuthenticated ? <UserMenu /> : <AuthNav />}
				</Toolbar>
			</AppBar>
		</>
	);
}
