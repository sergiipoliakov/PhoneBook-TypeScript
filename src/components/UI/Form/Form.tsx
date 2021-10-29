import React, { ReactNode } from "react";

import { makeStyles } from "@material-ui/core/styles";

interface IProps {
	children: ReactNode;
	onSubmit: () => void;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
}));

export default function Form({ children, ...props }: IProps) {
	const styles = useStyles();

	return (
		<form className={styles.root} noValidate {...props}>
			{children}
		</form>
	);
}
