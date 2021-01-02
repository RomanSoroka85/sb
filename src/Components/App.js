import React from "react";
import Filter from "./Filter"
import User from "./user/User";

const App = () => {
  return (
    <>
      <Filter/>
      <User initialValue={0}   />

    </>
  );
};

export default App;
