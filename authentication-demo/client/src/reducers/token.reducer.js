import {SIGNIN_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    token: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                authenticated: true,
                token: action.payload
            };
            break;
        default:
            return state;
    }
}