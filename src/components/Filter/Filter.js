import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeFilter } from "../../redux/contacts/redusers/ActionCreaters";
import { Input } from "../UI/Input/Input";

export default function Filter() {
	const dispatch = useAppDispatch();
	const { filter: value } = useAppSelector((state) => state.contactsReducer);
	const onContactFilterChange = (e) => {
		dispatch(changeFilter(e.target.value));
	};
	return (
		<div>
			<Input
				type="text"
				value={value}
				label="Search"
				onChange={onContactFilterChange}
			/>
		</div>
	);
}
