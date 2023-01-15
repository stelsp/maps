import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setText, setCoords, setSearch } from "../../store/dataSlice";
import { useGetDataQuery } from "../../store/dataApi";
import useDebounce from "../../hooks/useDebounce";

import style from "./style.module.css";

const Input = () => {
  const { search } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  return (
    <form className={style.input} onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        value={search}
        onChange={(e) => {
          dispatch(setText(e.target.value));
          dispatch(setSearch(e.target.value));
        }}
        placeholder="Enter adress here"
      />
    </form>
  );
};

const Output = () => {
  const { text } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const debouncedSearch = useDebounce(text, 400);
  const { data } = useGetDataQuery(debouncedSearch);

  return (
    <div className={style.output}>
      {data?.features.map((el, index) => (
        <span
          key={index}
          onClick={() => {
            dispatch(
              setCoords({
                lat: el.properties.lat,
                lon: el.properties.lon,
              })
            );
            dispatch(setText(""));
            dispatch(setSearch(el.properties.formatted));
          }}
        >
          {el.properties.formatted}
        </span>
      ))}
    </div>
  );
};

const SearchBar = () => {
  return (
    <section className={style.container} aria-label="search-bar">
      <Input />
      <Output />
    </section>
  );
};

export default SearchBar;
