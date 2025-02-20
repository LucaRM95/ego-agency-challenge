import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICarDetails } from "../../interfaces/ICarDetails";

const initialState = {
  loading: true,
  carDetails: {
    id: 0,
    name: "",
    segment: "",
    year: 0,
    price: 0,
    thumbnail: "",
    photo: "",
    title: "",
    description: "",
    model_features: [
      {
        name: "",
        description: "",
        image: "",
      },
    ],
    model_highlights: [
      {
        title: "",
        content: "",
        image: "",
      },
    ],
  },
};

const sliceCarDetails = createSlice({
  name: "Car Details",
  initialState: initialState,
  reducers: {
    setCarDetailsData: (state, action: PayloadAction<ICarDetails>) => {
      state.carDetails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const carDetailsActions = sliceCarDetails.actions;
export const carDetailsSelector = (state: RootState) => state.sliceCarDetails;
export default sliceCarDetails;
