import axios from 'axios';
import {SERVER_BASE_URL} from '../config';
import {SIGNIN_SUCCESS} from './types';

export function signinUser(email, password) {
    return (dispatch) => {
        axios.post(`${SERVER_BASE_URL}/signin`, {email, password})
            .then(response => dispatch({
                type: SIGNIN_SUCCESS,
                payload: response.data.token
            }))
    }
}