import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const actionSanityCheck = store => next => action => {
    if (!action.type) {
        console.error('Undefined action:', action);
    }
    return next(action);
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shoppingList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, actionSanityCheck, thunk].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);

export const persistor = persistStore(store);