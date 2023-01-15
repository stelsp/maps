import { FC, useEffect, useState } from "react";
import "./styles.css";
import { IResult } from "./types";
import { getData } from "./utils/getData";
import useDebounce from "./utils/useDebounce";

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
    <div className="container" id="autocomplete-container">
      <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   getData(text, setResult);
      // }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {/* OUTPUT >>> */}
      <div>
        {result ? (
          <div className="output">
            {result.map((el, index) => (
              <span
                key={index}
                onClick={() =>
                  setCoords({
                    lat: el.properties.lat,
                    lon: el.properties.lon,
                  })
                }
              >
                {el.properties.formatted}
              </span>
            ))}
          </div>
        ) : null}
        <div>
          lat:{coords.lat} lon:{coords.lon}
        </div>
      </div>
    </div>
  );
};

export default App;
