import { Route, Redirect } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { authSelectors } from "../../redux/auth";
import { useAppSelector } from "../../hooks/redux";

export default function PrivateRoute({
	component: Component,
	children,
	redirectTo,
	...routerProps
}) {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	// const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
	return (
		<Route {...routerProps}>
			{isAuthenticated ? children : <Redirect to={redirectTo} />}
		</Route>
	);
}
