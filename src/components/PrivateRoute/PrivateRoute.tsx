import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
interface Props {
	children: ReactNode;
	redirectTo: string;
	component?: React.FC;
	path: string;
}

export const PrivateRoute = ({
	component: Component,
	children,
	redirectTo,
	...routerProps
}: Props) => {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	// const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
	return (
		<Route {...routerProps}>
			{isAuthenticated ? children : <Redirect to={redirectTo} />}
		</Route>
	);
};
