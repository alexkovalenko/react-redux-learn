import * as axios from "axios";

export default ({dispatch}) => next => action => {
    if (action.hasOwnProperty('url')) {
        axios.get(action.url).then(payload => dispatch({
            type: action.type,
            payload
        }));
    } else {
        return next(action);
    }
}