import React from "react";
import Controls from "./components/Controls";

import Header from "./components/header/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Controls />
      </Main>
    </div>
  );
};

export default App;