import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

interface Props {
	children: React.ReactNode;
	redirectTo: string;
	component?: React.FC;
	path: string;
	restricted?: boolean;
}

export const PublicRoute = ({
	component: Component,
	children,
	redirectTo,
	...routerProps
}: Props) => {
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<Route {...routerProps}>
			{isAuthenticated && routerProps.restricted ? (
				<Redirect to={redirectTo} />
			) : (
				children
			)}
		</Route>
	);
};
