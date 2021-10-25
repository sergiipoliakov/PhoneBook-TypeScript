import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import { setupStore } from "./redux/store";
import store from "./redux/store";

ReactDOM.render(
	<>
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>,
	document.getElementById("root")
);
