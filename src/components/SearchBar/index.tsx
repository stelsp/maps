import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setText, setCoords } from "../../store/dataSlice";

const SearchBar: FC = () => {
  const { text, result } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  return (
    <section>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
        />
      </form>
      <div className="output">
        {result &&
          result.map((el, index) => (
            <span
              key={index}
              onClick={() =>
                dispatch(
                  setCoords({
                    lat: el.properties.lat,
                    lon: el.properties.lon,
                  })
                )
              }
            >
              {el.properties.formatted}
            </span>
          ))}
      </div>
    </section>
  );
};

export default SearchBar;
