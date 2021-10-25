import { useAppDispatch } from "../../../hooks/redux";
import { addContact } from "../../../redux/contacts/redusers/ActionCreaters";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../UI/Form/Form";
import { Input } from "../../UI/Input/Input";
import PrimaryButton from "../../UI/PrimaryButton/PrimaryButton";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
	name: yup
		.string()
		// .matches(/^([^0-9]*)$/, "Name should not contain number")
		.required("Name is a required field"),
	number: yup.string().required("Phone number is a required field"),
});

const normalizePhoneNumber = (value) => {
	const phoneNumber = parsePhoneNumberFromString(value);
	if (!phoneNumber) {
		return value;
	}
	return phoneNumber.formatInternational();
};

export default function ContactsEditor() {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		dispatch(addContact(data));
	};

	return (
		<div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register("name")}
					id="name"
					type="name"
					label="Name"
					name="name"
					required
					error={!!errors.name}
					helperText={errors?.name?.message}
				/>
				<Input
					{...register("number")}
					id="number"
					type="tel"
					label="Phone number"
					name="number"
					required
					onChange={(event) => {
						event.target.value = normalizePhoneNumber(event.target.value);
					}}
					error={!!errors.number}
					helperText={errors?.number?.message}
				/>
				<PrimaryButton type="submit">Add new contact</PrimaryButton>
			</Form>
		</div>
	);
}
