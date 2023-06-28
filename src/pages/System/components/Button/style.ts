import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { profileProps } from "./Button.types";

export const ButtonProfile = styled(Button)<profileProps>`
  width: 278px;
  height: 60px;
  border-radius: 8px;
  background: linear-gradient(
    rgba(255, 77, 163, 0.68) 6.56%,
    rgba(171, 38, 219, 0.37) 100%
  );
  color: var(--color-principal-white, #fff);
  font-size: 16px;
  font-family: Lexend;
  text-align: start;
  padding-left: 15px;
  padding-top: 18px;
`;

export const WraaperButton = styled.div`
  margin: -13px;
`;

export const ContentButton = styled.div`
  position: relative;
`;

export const TextAuxiliary = styled.span`
  color: var(--color-principal-white, #fff);
  font-size: 14px;
  font-family: Lexend;
  font-weight: 300;
  position: absolute;
  top: 48px;
  z-index: 1;
  margin-left: 15px;
`;
