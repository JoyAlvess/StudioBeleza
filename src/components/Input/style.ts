import styled from "styled-components";
import { InputProps } from "./Input.types";

export const Container = styled.div`
  position: relative;
`;

export const Inbox = styled.input<InputProps>`
  width: 220px;
  padding: 14px 14px 14px 44px;
  border-radius: 4px;
  background: var(--color-principal-white, #fff);
  border: 0;
  margin-bottom: 15px;

  font-size: 16px;
  font-family: Lexend;
  font-weight: 300;
  color: #4b1863;

  &::placeholder {
    font-size: 16px;
    font-family: Lexend;
    font-weight: 300;
    color: #4b1863;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: calc(100% - 48px);
  left: 15px;
`;
