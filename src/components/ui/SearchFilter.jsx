import React from 'react';
import './SearchFilter.css'

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const sortCountries = (value) => {
    const sortedCountries = [...countries];
    if (value === "asc") {
      sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }
    if (value === "des") {
      sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }
    setCountries(sortedCountries); // ✅ update state so UI rerenders
  };

  return (
    <div className='search-filter'>
      <input
        type='text'
        placeholder='Search for a country...'
        className='search-input'
        value={search} // ✅ controlled input
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <select
        className='filter-select'
        value={filter} // ✅ controlled select
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value='all'>Filter by Region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
