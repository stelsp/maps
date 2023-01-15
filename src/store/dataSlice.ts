import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  text: string;
  search: string;
  coords: { lat: number; lon: number };
}

const initialState: DataState = {
  text: "",
  search: "",
  coords: { lat: 0, lon: 0 },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setCoords: (state, action: PayloadAction<{ lat: number; lon: number }>) => {
      state.coords = action.payload;
    },
  },
});

export const { setSearch, setText, setCoords } = dataSlice.actions;

export default dataSlice.reducer;
