import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//css
import "./Details.css";

const Details = () => {
  const { countryKey } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${countryKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, [countryKey]);
  console.log(country);
  const { name, nativeName, capital, region, subregion, population, area, flag } = country;
  return (
    <div>
      <div className='details-header'>
        <h1>This is details of {name}</h1>
      </div>
      <div className='country-details'>
        <div className='details-flag-container'>
          <img src={flag} alt='' />
        </div>
        <div className='country-info'>
          <h2>Native Name: {nativeName}</h2>
          <h3>Capital: {capital}</h3>
          <p>Region: {region}</p>
          <p>Subregion: {subregion}</p>
          <p>Population: {population}</p>
          <p>
            Area: {area} km <sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
