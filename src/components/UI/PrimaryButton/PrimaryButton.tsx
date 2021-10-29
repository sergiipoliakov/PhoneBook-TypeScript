import React, { ReactNode } from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

interface IProps {
	children: ReactNode;
	type?: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export const PrimaryButton = ({ children, type, ...props }: IProps) => {
	const styles = useStyles();
	return (
		<Button
			type="submit"
			className={styles.root}
			fullWidth
			variant="contained"
			color="primary"
			{...props}
		>
			{children}
		</Button>
	);
};
