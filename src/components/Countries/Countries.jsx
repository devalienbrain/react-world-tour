import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ showCountryDetails }) => {
  // To load api data: declare state
  const [countries, setCountries] = useState([]);

  // Hook: to fetch data and set state
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries: Total {countries.length}</h3>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            showCountryDetails={showCountryDetails}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
