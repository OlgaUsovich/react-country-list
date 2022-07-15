import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface Iprops {
  country: ICountry;
}

const imageStyle = { width: 120, heigth: 60 };

export const CountryItem = ({ country }: Iprops) => {
  return (
    <li className="list-group-item row-cols-6 d-flex align-items-center gap-3">
    <img className="col-1" style={imageStyle} src={country.flag} alt="Flag" />
    <p className="col-2">{country.name}</p>
    <p className="col-2">{country.capital}</p>
    <p className="col-2">{country.region}</p>
    <Badge color={Color.primary} text={`area: ${country.area}`} />
    <Badge color={Color.secondary} text={`population: ${country.population}`} />
    </li>
  );
};
