import { FC, useState } from "react";
import "./styles.css";
import { IResult } from "./types";

const App: FC = () => {
  const [state, setState] = useState("");
  const [result, setResult] = useState<IResult[]>();
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  const testFetch = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${state}&apiKey=0895cbb5ad8c463ca78d2062e74f3423&lang=ru `,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResult(result.features);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container" id="autocomplete-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          testFetch();
        }}
      >
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            // setTimeout(() => {
            //   if (state.length > 0) {
            //     testFetch();
            //   }
            // }, 3000);
          }}
        />
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
      </form>
    </div>
  );
};

export default App;
