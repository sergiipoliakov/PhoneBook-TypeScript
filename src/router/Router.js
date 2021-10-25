import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage.jsx";
import PhonebookPage from "../pages/PhonebookPage";
import RegisterPage from "../pages/RegisterPage";

export const paths = {
	HOME: "/",
	PHONEBOOK: "/phonebook",
	LOGIN: "/login",
	REGISTER: "/register",
};

export default function Router() {
	return (
		<main>
			<div>
				<Switch>
					<Route path={paths.HOME} exact>
						<HomePage />
					</Route>
					<PrivateRoute path={paths.PHONEBOOK} redirectTo={paths.LOGIN}>
						<PhonebookPage />
					</PrivateRoute>
					<PublicRoute
						path={paths.LOGIN}
						restricted
						redirectTo={paths.PHONEBOOK}
					>
						<LoginPage />
					</PublicRoute>
					<PublicRoute
						path={paths.REGISTER}
						restricted
						redirectTo={paths.PHONEBOOK}
					>
						<RegisterPage />
					</PublicRoute>
				</Switch>
			</div>
		</main>
	);
}
