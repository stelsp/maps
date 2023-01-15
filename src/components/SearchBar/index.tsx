import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setText, setCoords } from "../../store/dataSlice";
import { useGetDataQuery } from "../../store/testSlice";
import { IResult } from "../../types";

import style from "./style.module.css";

const Input = () => {
  const { text } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  return (
    <form className={style.input} onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
    </form>
  );
};

const Output = () => {
  const { text } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetDataQuery(text);

  return (
    <div className={style.output}>
      {data?.features.map((el: IResult, index: number) => (
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
  );
};

const SearchBar: FC = () => {
  return (
    <section className={style.container} aria-label="search-bar">
      <Input />
      <Output />
    </section>
  );
};

export default SearchBar;
