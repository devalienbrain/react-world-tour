import { useState } from "react";

import "./App.css";
import Countries from "./components/Countries/Countries";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <h1>React World Tour</h1>

      <div className="body-container">
        <div className="country-container">
          <Countries></Countries>
        </div>

        <div className="details-container">
          <h3>Selected Countries</h3>
          <Details></Details>
        </div>
      </div>
    </>
  );
}

export default App;
