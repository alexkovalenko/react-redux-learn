import {
    FETCH_USERS
} from './types';
import * as axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsersWithReduxPromise() {
    const request = axios.get(USERS_URL);
    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function fetchUsersWithThunk() {
    return function (dispatch) {
        axios.get(USERS_URL)
            .then(response => dispatch({
                type: FETCH_USERS,
                payload: response
            }));
    }
}

export function fetchUsersWithCustomMiddleWare() {
    return {
        type: FETCH_USERS,
        url: USERS_URL
    }
}
