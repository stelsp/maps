import { FC, useEffect, useState } from "react";
import "./index.css";
import { IResult } from "./types";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import MapContainer from "./components/MapContainer";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getData } from "./store/dataSlice";

const App: FC = () => {
  const { text } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (text.length > 0) {
      dispatch(getData());
    }
  }, [text]);

  return (
    <div className="container" id="autocomplete-container">
      <SearchBar />
      <MapContainer />
    </div>
  );
};

export default App;
