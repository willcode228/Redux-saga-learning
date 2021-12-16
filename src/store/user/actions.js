
export const SET_USER_SUCCESS = 'USER/SET_USER_SUCCESS';
export const FETCH_USER = 'USER/FETCH_USER';
export const USER_LOADING = 'USER/USER_LOADING';

export const setUserSuccess = (payload) => ({
    type: SET_USER_SUCCESS, payload
});

export const setUserLoading = (payload) => ({
    type: USER_LOADING, payload
});

export const fetchUser = () => ({ type: FETCH_USER })