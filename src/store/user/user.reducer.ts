import { AnyAction } from "redux";
import { setCurrentUser } from "./user.action";

export type UserState = {
    readonly currentUser: null
}

const INITIAL_STATE: UserState = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if(setCurrentUser.match(action)) {
        return { ...state, currentUser: action.payload }
    }

    return state;
}