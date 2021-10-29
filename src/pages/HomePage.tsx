import { Typography } from "@material-ui/core";
import React, { FC } from "react";

import { MainContainer } from "../components/UI/MaineContainer/MainContainer";

export const HomePage: FC = () => {
	return (
		<MainContainer>
			<Typography variant="h1" component="h2" color="primary">
				Phonebook
			</Typography>
			<Typography variant="subtitle1" gutterBottom color="secondary">
				We are glad to see you on our website.
			</Typography>
		</MainContainer>
	);
};
