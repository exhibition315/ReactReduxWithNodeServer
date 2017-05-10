import * as types from '../actions/actionTypes';
import { hashHistory } from 'react-router';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_AUTH_SUCCESS:
            var res = action.response;
            hashHistory.push('/');
            return !!sessionStorage.auth;
        default:
            return state;
    }
}