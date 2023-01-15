import { FC, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MapContainer from "./components/MapContainer";

import "./index.css";

const App: FC = () => {
  return (
    <div className="container" id="autocomplete-container">
      <SearchBar />
      <MapContainer />
    </div>
  );
};

export default App;
