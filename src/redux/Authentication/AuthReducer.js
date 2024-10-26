import { FETCH_AUTH_ID, REMOVE_AUTH_ID } from "../Constants";

const initialState = '';

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTH_ID:
            return action.data;
        case REMOVE_AUTH_ID:
            return '';
        default:
            return state;
    }
}