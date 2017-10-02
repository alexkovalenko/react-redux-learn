import {combineReducers} from 'redux';
import WeatherReducer from './reducer_weatcher';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
