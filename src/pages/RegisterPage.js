import React, { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { registerUser } from "../redux/auth/reducers/ActionCreaters";

export default function RegisterPage() {
	const dispatch = useAppDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(registerUser({ name, email, password }));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleNameChange}
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					type="text"
					name="name"
					value={password}
					onChange={handlePasswordChange}
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

// "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
