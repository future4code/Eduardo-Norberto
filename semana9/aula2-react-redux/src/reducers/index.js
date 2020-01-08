import {combineReducers} from 'redux';
import list from "./list";

const rootReducer = combineReducers ({
	list: list,
})

export default rootReducer;

