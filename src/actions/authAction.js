import * as types from './actionTypes.js';
import authApi from '../api/authApi.js';

export function getAuthSuccess(response) {
    return {
        type: types.GET_AUTH_SUCCESS,
        response
    };
}

export function getAuthAction() {
    return function (dispatch) {
        authApi.getAuth(
            args => { // Success callback                          
                sessionStorage.setItem('auth', 'OK');
                dispatch(getAuthSuccess(args));
            },
            args => { // Error callback
                console.log(args);
            })
    };
}