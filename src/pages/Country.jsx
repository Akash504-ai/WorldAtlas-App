import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from '../components/ui/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/ui/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (search && filter !== "all") {
      return (
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        country.region === filter
      );
    }
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    if (filter !== "all") {
      return country.region === filter;
    }
    return true; // keep all countries if no search/filter applied
  };

  const filterCountries = countries.filter((country) => searchCountry(country));

  return (
    <section className="section-country">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="country-list">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
