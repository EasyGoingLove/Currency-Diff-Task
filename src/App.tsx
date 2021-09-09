import React, { useEffect } from "react";

import cache from "./services/cache";
import Dropdown from "./components/Dorpdown";
import "./App.css";

const App = () => {
  useEffect(() => {
    const baseUrl =
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    const currencyCodes = ["usd", "eur", "aud", "cad", "chf", "nzd", "bgn"];
    for (let i of currencyCodes) {
      cache(baseUrl, i);
    }
  }, []);

  return (
    <div className="App">
      <Dropdown />
    </div>
  );
};

export default App;
