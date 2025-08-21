import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndvData } from "../../api/postApi";
import Loader from "../ui/Loader";
import "./CountryDetails.css";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndvData(params.id);
      console.log(res.data);

      // If API returns an array of countries
      if (Array.isArray(res.data) && res.data.length > 0) {
        setCountry(res.data[0]);
      }
      // If API returns a single object
      else {
        setCountry(res.data);
      }
    });
  }, [params.id]);

  if (isPending || !country) {
    return <Loader />;
  }

  return (
    <section className="section-country-details">
      <div className="country-details-card">
        <div className="img">
          <img src={country.flags?.svg} alt={country.name?.common} />
        </div>
        <div className="info">
          <h1>Country Details</h1>
          <h2>{country.name?.common}</h2>
          <p>
            <span>Native Name:</span> {country.name?.nativeName ? Object.values(country.name.nativeName)[0].common : "N/A"}
          </p>
          <p>
            <span>Population:</span> {country.population?.toLocaleString()}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital ? country.capital[0] : "N/A"}
          </p>
          <p>
            <span>Subregion:</span> {country.subregion}
          </p>
          <p>
            <span>Area:</span> {country.area} km²
          </p>
          <p>
            <span>Languages:</span>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
          <p>
            <span>Currencies:</span>{" "}
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")
              : "N/A"}
          </p>
          <NavLink to="/country">
            <button className="btn">Back to Countries</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
