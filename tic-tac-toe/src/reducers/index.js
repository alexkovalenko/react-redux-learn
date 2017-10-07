import {combineReducers} from 'redux';
import signReducer from './sign_reducer';
import cellReducer from './cell_reducer';
import gameStateReducer from './game_state_reducer';

const rootReducer = combineReducers({
    sign: signReducer,
    cells: cellReducer,
    gameState: gameStateReducer
});

export default rootReducer;