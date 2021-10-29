import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { paths } from "../../router/Router";
import { MenuItem, MenuList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(0, 0, 0),

		textDecoration: "none",

		fontFamily: "Permanent Marker",
		fontSize: "20px",
		color: "deeppink",
		textShadow: "1px 1px darkmagenta",
	},
	flexMenu: {
		display: "flex",
	},
}));

export const Navigation: React.FC = () => {
	const styles = useStyles();
	const location = useLocation();
	return (
		<MenuList className={styles.flexMenu}>
			<MenuItem
				className={styles.root}
				component={NavLink}
				to={paths.HOME}
				selected={paths.HOME === location.pathname}
			>
				Home
			</MenuItem>
			<MenuItem
				className={styles.root}
				component={NavLink}
				to={paths.PHONEBOOK}
				selected={paths.PHONEBOOK === location.pathname}
			>
				Phonebook
			</MenuItem>
		</MenuList>
	);
};
