import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['shoppingList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);

export const persistor = persistStore(store);