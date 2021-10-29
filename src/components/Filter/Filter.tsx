import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeFilter } from "../../redux/contacts/redusers/ActionCreaters";
import { Input } from "../UI/Input/Input";

export const Filter: React.FC = () => {
	const dispatch = useAppDispatch();
	const { filter: value } = useAppSelector((state) => state.contactsReducer);
	const onContactFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
};
