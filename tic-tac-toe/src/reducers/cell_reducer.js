import _ from 'lodash';
import {CELL_CLICK, GAME_START_NEW} from '../actions/types';

export default function cellReducer(state = [[], [], []], action) {
    switch (action.type) {
        case CELL_CLICK:
            const {x, y, sign} = action.payload;
            const newState = _.slice(state);
            newState[x][y] = sign;
            return newState;
        case GAME_START_NEW:
            return [[], [], []];
        default:
            return state;
    }
}