import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function PrimaryButton({ children, type, ...props }) {
	const styles = useStyles();
	return (
		<Button
			className={styles.root}
			type={type}
			fullWidth
			variant="contained"
			color="primary"
		>
			{children}
		</Button>
	);
}
