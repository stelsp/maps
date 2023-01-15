import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResult } from "../types";
import type { RootState } from "./store";

interface DataState {
  text: string;
  result: IResult[] | null;
  coords: { lat: number; lon: number };
}

const initialState: DataState = {
  text: "",
  result: null,
  coords: { lat: 0, lon: 0 },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setResult: (state, action: PayloadAction<IResult[] | null>) => {
      state.result = action.payload;
    },
    setCoords: (state, action: PayloadAction<{ lat: number; lon: number }>) => {
      state.coords = action.payload;
    },
    getData: (state) => {
      let requestOptions = {
        method: "GET",
      };

      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${state.text}&apiKey=0895cbb5ad8c463ca78d2062e74f3423&lang=ru `,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    },
  },
});

export const { getData, setText, setResult, setCoords } = dataSlice.actions;

export default dataSlice.reducer;
