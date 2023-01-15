import React from "react";
import MapContainer from "./components/MapContainer";
import SearchBar from "./components/SearchBar";
import "./index.css";

const App = () => {
  return (
    <main className="container" id="autocomplete-container">
      <SearchBar />
      <MapContainer />
    </main>
  );
};

export default App;
