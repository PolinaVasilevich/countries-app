import React from "react";
import { IoSearch } from "react-icons/io5";
import { Input, InputContainer } from "./SearchStyled";

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    </InputContainer>
  );
};

export default Search;
