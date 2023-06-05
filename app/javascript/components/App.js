import React from "react";
import { Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "../redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Provider>
  );
};

export default App;
