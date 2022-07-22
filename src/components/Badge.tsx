import { BadgeLabel, Color } from "../types";

interface IProps {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ color, label, value }: IProps) => {
  return <p className={`badge bg-${color} col-2 m-0`}>{label}: {value}</p>;
};
