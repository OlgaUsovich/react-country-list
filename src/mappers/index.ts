import { ICountry, CountryApi } from "../types";

export const transformCountries = (countries: CountryApi): ICountry[] => {
    return countries.map(
        (country): ICountry => ({
          name: country.name.common,
          capital: country.capital[0],
          population: country.population,
          flag: country.flags.svg,
          area: country.area,
          region: country.region,
        })
    )
};
