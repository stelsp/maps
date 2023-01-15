import { FC, useEffect, useState } from "react";
import MapContainer from "./components/MapContainer";
import SearchBar from "./components/SearchBar";
import "./index.css";

const App: FC = () => {
  return (
    <main className="container" id="autocomplete-container">
      <SearchBar />
      <MapContainer />
    </main>
  );
};

export default App;
