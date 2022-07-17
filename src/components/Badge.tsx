import { Color } from "../types";

interface IProps {
  color: Color;
  text: string;
}

export const Badge = ({ color, text }: IProps) => {
  return <p className={`badge bg-${color} col m-0`}>{text}</p>;
};
