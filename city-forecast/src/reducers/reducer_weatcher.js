import {ActionType} from '../actions/index';


export default function (state = [], action) {

    switch (action.type) {
        case ActionType.FETCH_WEATHER:
            return [action.payload.data, ...state];
        default:
            return state
    }
};