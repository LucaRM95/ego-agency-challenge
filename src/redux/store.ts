import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/reducers";

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

export default store;