import axios from 'axios';

//https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags,languages,currencies

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
})

export const getCountryData = () => {
  return api.get("/all?fields=name,capital,region,subregion,population,area,flags,languages,currencies");
}

export const getCountryIndvData = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,capital,region,subregion,population,area,flags,languages,currencies`);
}