import { useAppDispatch } from "../hooks/redux";
import { fetchUser } from "../redux/auth/reducers/ActionCreaters";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import MainContainer from "../components/UI/MaineContainer/MainContainer";
import Form from "../components/UI/Form/Form";
import { Input } from "../components/UI/Input/Input";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/UI/PrimaryButton/PrimaryButton";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have coract format")
		.required("Email is a required field"),
	password: yup
		.string()
		.min(7, "min 7 simbols")
		.required("Password is a required field"),
});

export default function LoginPage() {
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
		dispatch(fetchUser(data));
	};

	return (
		<MainContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
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

				<PrimaryButton type="submit">Login</PrimaryButton>
			</Form>
		</MainContainer>
	);
}
