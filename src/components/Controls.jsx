import React, { useState } from "react";
import Search from "./search/Search";

const Controls = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Controls;
