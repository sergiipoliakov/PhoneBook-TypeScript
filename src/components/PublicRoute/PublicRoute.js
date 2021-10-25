import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

export default function PublicRoute({
	component: Component,
	children,
	redirectTo,
	...routerProps
}) {
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
}
