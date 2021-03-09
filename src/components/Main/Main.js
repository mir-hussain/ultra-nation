import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

//css
import "./Main.css";

const Main = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </main>
  );
};

export default Main;
