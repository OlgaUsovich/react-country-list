import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item row d-flex align-items-center gap-3">
    <img className="col-1 p-0" src={country.flag} alt="Flag" />
    <p className="col-3 m-0">{country.name}</p>
    <p className="col m-0">{country.capital}</p>
    <p className="col m-0">{country.region}</p>
    <Badge color={Color.Primary} text={`area: ${country.area}`} />
    <Badge color={Color.Secondary} text={`population: ${country.population}`} />
    </li>
  );
};
