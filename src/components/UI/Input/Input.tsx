import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

interface IProps {
	id?: string;
	type?: string;
	label?: string;
	name?: string;
	required?: boolean;
	error?: boolean;
	value?: string;
	helperText?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef(({ ...props }: IProps, ref) => {
	return (
		<TextField
			variant="outlined"
			margin="normal"
			inputRef={ref}
			fullWidth
			{...props}
		/>
	);
});
