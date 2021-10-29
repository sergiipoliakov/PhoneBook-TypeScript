import React, { FC } from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export const MainContainer: FC = ({ children }) => {
	const styles = useStyles();

	return (
		<>
			<CssBaseline />
			<Container className={styles.root} fixed maxWidth="xs">
				<Typography component="div" children={children} />
			</Container>
		</>
	);
};
