import "./country.css";

const Country = ({ country }) => {
  // console.log(country);
  const showCountryDetails = (country) => {
    console.log(country);
  };
  const { name, flags } = country;
  return (
    <div onClick={() => showCountryDetails(country)} className="container">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
