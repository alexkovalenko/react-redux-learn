import {CELL_CLICK, TURN_NEXT, GAME_STATE_CHANGE, GAME_START_NEW} from './types';

export const X = 'X';
export const O = 'O';

export const IN_PROGRESS = 'IN_PROGRESS';
const WIN = {
    [X]: 'X_WINS',
    [O]: 'O_WINS'
};
const DRAW = 'DRAW';

const WIN_LINES = [
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]],
];

export function clickCell(x, y) {
    return (dispatch, getState) => {
        const {sign, cells, gameState} = getState();
        dispatch(clickCellInner(x, y, sign));
        const newGameState = getGameState(sign, cells, gameState);
        if (newGameState === IN_PROGRESS) {
            dispatch(nextTurn());
        } else {
            dispatch(changeGameState(newGameState));
        }
    }
}

function winTurn(sign, cells) {
    for (let i = 0; i < WIN_LINES.length; i++) {
        let line = WIN_LINES[i];
        const firstCell = line[0];
        const secondCell = line[1];
        const thirdCell = line[2];
        if (cellSignMatch(sign, cells, firstCell)
            && cellSignMatch(sign, cells, secondCell)
            && cellSignMatch(sign, cells, thirdCell)) {
            return true;
        }
    }
    return false;
}

function getGameState(sign, cells, oldGameState) {
    let state = oldGameState;
    if (winTurn(sign, cells)) {
        state = WIN[sign];
    } else if (draw(cells)) {
        state = DRAW;
    }
    return state;
}

function cellSignMatch(sign, cells, index) {
    return cells[index[0]] && cells[index[0]][index[1]] === sign;
}

function draw(cells) {
    if (cells.length !== 3) {
        return false;
    }
    for (let i = 0; i < cells.length; i++) {
        let line = cells[i];
        if (line.length !== 3) {
            return false;
        }
        for (let j = 0; j < line.length; j++) {
            if (line[j] !== X && line[j] !== O ) {
                return false;
            }
        }
    }
    return true;
}

export function startNewGame() {
    return {type: GAME_START_NEW}
}

function clickCellInner(x, y, sign) {
    return {
        type: CELL_CLICK,
        payload: {x, y, sign}
    }
}

function nextTurn() {
    return {type: TURN_NEXT}
}

function changeGameState(state) {
    return {
        type: GAME_STATE_CHANGE,
        payload: state
    }
}
