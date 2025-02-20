import { combineReducers } from "@reduxjs/toolkit";
import sliceCars from "./sliceCars";

export const reducers = combineReducers({
    sliceCars: sliceCars.reducer
});