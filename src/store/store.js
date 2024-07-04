import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const actionSanityCheck = store => next => action => {
    if (!action.type) {
        console.error('Undefined action:', action);
    }
    return next(action);
};

const middleWares = [actionSanityCheck, logger, thunk];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
    rootReducer, 
    undefined, 
    composedEnhancers
);

//const middleWares = [logger, thunk];

//const composedEnhancers = compose(applyMiddleware(...middleWares));

/*export const store = createStore(
    rootReducer, 
    undefined, 
    composedEnhancers
);*/
