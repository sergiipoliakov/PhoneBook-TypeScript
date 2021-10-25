import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export default function MainContainer({ children, ...props }) {
	const styles = useStyles();

	return (
		<Container className={styles.root} container="main" maxWidth="xs">
			{children}
		</Container>
	);
}
