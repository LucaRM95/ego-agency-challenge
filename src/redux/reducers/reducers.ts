import { combineReducers } from "@reduxjs/toolkit";
import sliceCars from "./sliceCars";
import sliceCarDetails from "./sliceCarDetails";

export const reducers = combineReducers({
    sliceCars: sliceCars.reducer,
    sliceCarDetails: sliceCarDetails.reducer
});