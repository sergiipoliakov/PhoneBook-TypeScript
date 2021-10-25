import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./auth/reducers/UserSlice";
import contactsReducer from "./contacts/redusers/ContactsSlice";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
];
const authPersistConfig = {
	key: "auth",
	storage,
	whitelist: ["user"],
};
// const contactsPersistConfig = {
// 	key: "contscts",
// 	storage,
// 	blacklist: ["loading", "error"],
// };

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, userReducer),
	contactsReducer,
	// contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware,
	});
};

const store = setupStore();

const persistor = persistStore(store);

const reduxStore = {
	store,
	persistor,
};
export default reduxStore;

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
