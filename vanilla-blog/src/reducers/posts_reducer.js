import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            const post = action.payload.data;
            return post ? {...state, [post.id]: post} : state;
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            const id = action.payload;
            return post ? _.omit(state, id) : state;
        default:
            return state;
    }
}