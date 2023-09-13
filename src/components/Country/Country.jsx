import "./country.css";

const Country = ({ country, showCountryDetails }) => {
  const { name, flags } = country;
  return (
    <div onClick={() => showCountryDetails(country)} className="container">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
