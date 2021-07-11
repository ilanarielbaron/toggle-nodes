import {combineReducers} from "@reduxjs/toolkit";
import boardReducer from "./boardReducer";

const rootReducer = combineReducers({
    board: boardReducer
});

export default rootReducer;
