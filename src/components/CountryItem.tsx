import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface Iprops {
  country: ICountry;
}

// const imageStyle = { width: 80 };

export const CountryItem = ({ country }: Iprops) => {
  return (
    <li className="list-group-item row d-flex align-items-center gap-3">
    <img className="col-1 p-0" src={country.flag} alt="Flag" />
    <p className="col-3 m-0">{country.name}</p>
    <p className="col m-0">{country.capital}</p>
    <p className="col m-0">{country.region}</p>
    <Badge color={Color.primary} text={`area: ${country.area}`} />
    <Badge color={Color.secondary} text={`population: ${country.population}`} />
    </li>
  );
};
