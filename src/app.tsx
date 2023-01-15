import React from "react";
import MapContainer from "./components/MapContainer";
import SearchBar from "./components/SearchBar";
import style from "./index.module.css";

const App = () => {
  return (
    <main className={style.container}>
      <SearchBar />
      <MapContainer />
    </main>
  );
};

export default App;
