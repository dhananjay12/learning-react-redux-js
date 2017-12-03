import { combineReducers } from 'redux';
import dummy from './dummy_reducers';

const rootReducer = combineReducers({
    dummy: dummy

});

export default rootReducer;