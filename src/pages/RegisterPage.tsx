import React, { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { registerUser } from "../redux/auth/reducers/ActionCreaters";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Alert, AlertTitle } from "@material-ui/lab";

import Form from "../components/UI/Form/Form";
import { Input } from "../components/UI/Input/Input";
import { PrimaryButton } from "../components/UI/PrimaryButton/PrimaryButton";
import { MainContainer } from "../components/UI/MaineContainer/MainContainer";

type FormValues = {
	name: string;
	email: string;
	password: string;
};

const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^([^0-9]*)$/, "Name should not contain number")
		.required("Name is a required field"),
	email: yup
		.string()
		.email("Email should have coract format")
		.required("Email is a required field"),
	password: yup
		.string()
		.min(7, "min 7 simbols")
		.required("Password is a required field"),
});

export const RegisterPage: FC = () => {
	const dispatch = useAppDispatch();
	const { error } = useAppSelector((state) => state.auth);
	const [errorMessage, setErrorMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit = ({ name, email, password }: FormValues) => {
		dispatch(registerUser({ name, email, password }));

		if (error === "Request failed with status code 400") {
			setErrorMessage("Email is allready used");
		}
	};

	return (
		<MainContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register("name")}
					id="name"
					type="text"
					label="Your Name"
					name="name"
					required
					error={!!errors.name}
					helperText={errors?.name?.message}
				/>
				<Input
					{...register("email")}
					id="email"
					type="email"
					label="Email"
					name="email"
					required
					error={!!errors.email}
					helperText={errors?.email?.message}
				/>
				<Input
					{...register("password")}
					id="password"
					type="password"
					label="Password"
					name="password"
					error={!!errors.password}
					helperText={errors?.password?.message}
				/>
				<PrimaryButton type="submit">Register</PrimaryButton>
			</Form>
			{errorMessage && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					{errorMessage}
				</Alert>
			)}
		</MainContainer>
	);
};

// "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
