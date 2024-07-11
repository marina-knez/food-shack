import { compose, createStore, applyMiddleware, Middleware, Dispatch, AnyAction } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from "redux-thunk";
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

type CustomMiddleware = Middleware<{}, RootState, Dispatch<AnyAction>>;

const middleWares: CustomMiddleware[] = [thunk as ThunkMiddleware<RootState, AnyAction>];

if (process.env.NODE_ENV !== 'production') {
    middleWares.push(logger as CustomMiddleware);
}

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);

export const persistor = persistStore(store);
