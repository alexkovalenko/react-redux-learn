import {
    FETCH_USERS
} from './types';

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            {name: 'Alex'},
            {name: 'Jim'},
            {name: 'Julia'}
        ]
    }

}
