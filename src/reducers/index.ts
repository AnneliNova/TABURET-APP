import { combineReducers } from "redux";
import chairReducer from "./chair";

const rootReducer = combineReducers({ 
    chairs: chairReducer 
});

export default rootReducer;