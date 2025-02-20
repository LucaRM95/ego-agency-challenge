import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICar } from "../../interfaces/ICar";
import { RootState } from "../store";

const initialState = {
  loading: true,
  cars: [
    {
      id: 0,
      name: "",
      segment: "",
      year: 0,
      price: 0,
      thumbnail: "",
      photo: "",
    },
  ],
};

const sliceCars = createSlice({
  name: "Cars",
  initialState: initialState,
  reducers: {
    setCarsData: (state, action: PayloadAction<Array<ICar>>) => {
      state.cars = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const carsActions = sliceCars.actions;
export const carsSelector = (state: RootState) => state.sliceCars;
export default sliceCars;
