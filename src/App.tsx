import { FC, useEffect, useState } from "react";
import "./index.css";
import { IResult } from "./types";
import { getData } from "./utils/getData";
import useDebounce from "./utils/useDebounce";
import SearchBar from "./components/SearchBar";
import MapContainer from "./components/MapContainer";

const App: FC = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<IResult[] | null>(null);
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    if (text.length > 0) {
      getData(text, setResult);
    }
  }, [text]);

  return (
    <div className="container">
      <SearchBar
        text={text}
        result={result}
        setText={setText}
        setCoords={setCoords}
      />
      <MapContainer coords={coords} />
    </div>
  );
};

export default App;
