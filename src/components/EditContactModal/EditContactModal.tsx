import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { editContact } from "../../redux/contacts/redusers/ActionCreaters";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Backdrop, makeStyles, Box, IconButton } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Form from "../../components/UI/Form/Form";
import { Input } from "../../components/UI/Input/Input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../UI/PrimaryButton/PrimaryButton";

type FormValues = {
	name: string;
	number: string;
};
interface IProps {
	id: string;
	name?: string;

	number?: string;
	onModalClose?: () => boolean | null | void;
	showModal?: boolean;
}

const useStyles = makeStyles((thema) => ({
	root: {
		zIndex: 5,
		color: "white",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
		maxWidth: "450px",
		height: "auto",
		background: "#fff",
		color: "#000",
		borderRadius: "5px",
	},
}));

const schema = yup.object().shape({
	name: yup
		.string()
		// .matches(/^([^0-9]*)$/, "Name should not contain number")
		.required("Name is a required field"),
	number: yup.string().required("Phone number is a required field"),
});

export const EditContactModal = ({
	id,
	name,
	number,
	onModalClose = () => null,
	showModal,
}: IProps) => {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const [newName, setNewName] = useState(name);
	const [newNumber, setNewNumber] = useState(number);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const onSubmit = ({ name, number }: FormValues) => {
		dispatch(editContact(id, { name, number }));
		onModalClose();
	};

	const handleOnBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onModalClose();
		}
	};
	const handleClose = () => {
		onModalClose();
	};
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewName(e.target.value);
	};
	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewNumber(e.target.value);
	};

	return (
		<>
			<Backdrop
				className={styles.root}
				open={!!showModal}
				onClick={handleOnBackdropClick}
			>
				<Box className={styles.content}>
					<IconButton onClick={handleClose}>
						<HighlightOffIcon />
					</IconButton>
					<div>
						<span>{name} </span>
						<span>{number} </span>
					</div>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							{...register("name")}
							id="name"
							type="name"
							label="Name"
							name="name"
							required
							onChange={handleNameChange}
							value={newName}
							error={!!errors.name}
							helperText={errors?.name?.message}
						/>
						<Input
							{...register("number")}
							id="number"
							type="tel"
							label="Phone number"
							name="number"
							onChange={handleNumberChange}
							value={newNumber}
							required
							// onChange={(event) => {
							// 	event.target.value = normalizePhoneNumber(event.target.value);
							// }}
							error={!!errors.number}
							helperText={errors?.number?.message}
						/>
						<PrimaryButton type="submit">Edit contact</PrimaryButton>
					</Form>
				</Box>
			</Backdrop>
		</>
	);
};
