import {TURN_NEXT, GAME_START_NEW} from '../actions/types';
import {X, O} from '../actions/index';

const INITIAL_STATE = X;

export default function signReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TURN_NEXT:
            return state === X ? O : X;
        case GAME_START_NEW:
            return INITIAL_STATE;
        default:
            return state;
    }
}