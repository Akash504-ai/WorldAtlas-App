import React from "react";
import Country from "../../pages/Country";
import "./country.css";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card">
      <div className="countryy">
        <img src={flags.svg} alt={name.common} />
      </div>
      <div className="country-details">
        <h3>
          {name.common.length > 10
            ? name.common.slice(0, 10) + "..."
            : name.common}
        </h3>
        <p>
          <span>Population:</span> {population.toLocaleString()}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital ? capital[0] : "N/A"}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button>Read More</button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
