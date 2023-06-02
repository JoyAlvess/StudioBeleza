import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  font-family: "Lexend";
  font-size: ${({ fSize }) => fSize || "14px"};
  font-style: normal;
  font-weight: 500;
  text-align: center;

  margin-top: ${({ mTop }) => mTop || "35px"};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: 3px;
  background: #ff4da3;
  color: #ffffff;
  filter: drop-shadow(2px 4px 8px rgba(255, 255, 255, 0.5));

  outline: none;
  border: 0;

  @media (min-width: 425px) {
    margin-top: ${({ media425Mtop }) => media425Mtop || "15px"};
    font-size: ${({ media425fSize }) => media425fSize};

    width: ${({ media425Width }) => media425Width};
    height: ${({ media425Height }) => media425Height};
  }
`;
