import { SET_USER_SUCCESS, USER_LOADING } from './actions';

const userReducer = (state = {loading: false}, action) => {
    const {type, payload} = action;

    switch(type) {
        case SET_USER_SUCCESS: 
            return {...payload}
        case USER_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return {state}
    }
}

export default userReducer;
