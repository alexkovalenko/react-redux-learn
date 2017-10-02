import ActionType from '../actions/action_type';

export default function (state = null, action) {
    switch (action.type) {
        case ActionType.SELECT_BOOK:
            return action.book;
        default:
            return null;
    }
}