import { MouseEventHandler } from "react";

export interface ButtonProps {
  width?: string;
  height?: string;
  mTop?: string;
  media425Mtop?: string;
  fSize?: string;
  media425fSize?: string;
  media425Width?: string;
  media425Height?: string;
  text?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
