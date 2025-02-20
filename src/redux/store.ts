import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/reducers";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof reducers>;

export default store;