import React, { FC } from "react";
import { IResult } from "../../types";

interface ISearchBar {
  text: string;
  result: IResult[] | null;

  setText: React.Dispatch<React.SetStateAction<string>>;
  setCoords: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lon: number;
    }>
  >;
}

const SearchBar: FC<ISearchBar> = ({ text, result, setText, setCoords }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
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
      </div>
    </div>
  );
};

export default SearchBar;
