import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="my-5 fs-1">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
