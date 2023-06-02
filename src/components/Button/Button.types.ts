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
  media768fSize?: string;
  media768Width?: string;
  media768Height?: string;
  text?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
