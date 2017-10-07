import {GAME_STATE_CHANGE, GAME_START_NEW} from '../actions/types';
import {IN_PROGRESS} from '../actions/index'

const INITIAL_STATE = IN_PROGRESS;

export default function gameStateReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GAME_STATE_CHANGE:
            return action.payload;
        case GAME_START_NEW:
            return INITIAL_STATE;
        default:
            return state;
    }
}