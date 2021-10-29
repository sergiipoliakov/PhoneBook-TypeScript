import React, { useState, FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteContact } from "../../../redux/contacts/redusers/ActionCreaters";
import {
	ListItem,
	ListItemText,
	ListItemAvatar,
	ListItemSecondaryAction,
	Avatar,
	IconButton,
} from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { EditContactModal } from "../../EditContactModal/EditContactModal";

type Contact = {
	id: string;
	name: string;
	number: string;
};

interface IProps {
	contact: Contact;
}

export const ContactItem: FC<IProps> = ({ contact }) => {
	const dispatch = useAppDispatch();
	const [showModal, setShowModal] = useState(false);

	const onDeleteContact = (id: string) => {
		dispatch(deleteContact(id));
	};

	const showEditModal = () => {
		setShowModal((showModal) => !showModal);
	};

	const { name, number, id } = contact;
	return (
		<>
			<ListItem button onClick={showEditModal}>
				<ListItemAvatar>
					<Avatar />
				</ListItemAvatar>
				<ListItemText>{name}</ListItemText>

				<ListItemText>{number}</ListItemText>

				<ListItemSecondaryAction>
					<IconButton type="button" onClick={() => onDeleteContact(contact.id)}>
						<DeleteForeverIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			<EditContactModal
				id={id}
				name={name}
				number={number}
				onModalClose={showEditModal}
				showModal={showModal}
			/>
		</>
	);
};
