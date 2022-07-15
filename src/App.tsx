import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { ICountry } from "./types";

export const App = () => {
  const transformedCountries = countries.map(
    (country: any): ICountry => ({
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    })
  );
  return (
    <div className="container">
      <h1 className="my-5">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
