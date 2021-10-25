import React from "react";
import { useAppSelector } from "../../../hooks/redux";

import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Filter from "../../Filter/Filter";
import ContactItem from "../ContactItem/ContactItem";

type Item = {
	id: string;
	name: string;
	number: string;
};

interface Props {
	items: Item[];
}

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(3, 3, 3, 3),
		width: "100%",
		maxWidth: "360px",
		backgroundColor: theme.palette.background.default,
	},
}));

export default function ContactList({ items = [] }: Props) {
	const classes = useStyles();

	const { filter } = useAppSelector((state) => state.contactsReducer);

	const getVisibleContacts = (filter: string) => {
		return items.filter((item) =>
			item.name.toLowerCase().includes(filter.toLowerCase())
		);
	};
	const visibleContacts = getVisibleContacts(filter);

	return (
		<>
			<Filter />
			<List dense className={classes.root}>
				{visibleContacts &&
					visibleContacts.map((item) => (
						<ContactItem key={item.id} contact={item} />
					))}
			</List>
		</>
	);
}
