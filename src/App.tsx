import { FC, useEffect } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import MapContainer from "./components/MapContainer";

const App: FC = () => {
  return (
    <div className="container" id="autocomplete-container">
      <SearchBar />
      <MapContainer />
    </div>
  );
};

export default App;
