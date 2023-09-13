/* eslint-disable no-unused-vars */
import React from "react";

const Details = ({ countryDetails }) => {
  console.log(countryDetails);
  return (
    <div>
      <p>hello</p>
      {countryDetails.map((countryd) => {
        return <li key={countryd.cca2}>{countryd.name.common}</li>;
      })}
    </div>
  );
};

export default Details;
