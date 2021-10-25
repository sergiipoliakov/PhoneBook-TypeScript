import { paths } from "../../router/Router";
import { makeStyles } from "@material-ui/core";
import { MenuItem, MenuList } from "@material-ui/core";

import { NavLink, useLocation } from "react-router-dom";

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

export default function AuthNav() {
	const location = useLocation();
	const styles = useStyles();
	return (
		<MenuList className={styles.flexMenu}>
			<MenuItem
				className={styles.root}
				selected={paths.REGISTER === location.pathname}
				component={NavLink}
				to={paths.REGISTER}
			>
				Registration
			</MenuItem>
			<MenuItem
				className={styles.root}
				selected={paths.LOGIN === location.pathname}
				component={NavLink}
				to={paths.LOGIN}
			>
				Login
			</MenuItem>
		</MenuList>
	);
}
