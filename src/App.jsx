import { useState } from "react";

import "./App.css";
import Countries from "./components/Countries/Countries";
import Details from "./components/Details/Details";

function App() {
  const [countryDetails, setCountryDetails] = useState([]);

  const showCountryDetails = (country) => {
    setCountryDetails([...countryDetails, country]);
    // console.log(countrydetails);
  };

  return (
    <>
      <h1>React World Tour</h1>

      <div className="body-container">
        <div className="country-container">
          <Countries showCountryDetails={showCountryDetails}></Countries>
        </div>

        <div className="details-container">
          <h3>Selected Countries</h3>
          <Details countryDetails={countryDetails}></Details>
        </div>
      </div>
    </>
  );
}

export default App;
