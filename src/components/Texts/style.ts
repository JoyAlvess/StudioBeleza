import styled from "styled-components";
import { TextsProps } from "./Texts.types";

export const ContainerTexts = styled.div<TextsProps>`
  position: absolute;
  top: calc(100% - 165px);

  padding: ${({ padding }) => padding || " 0 15px"};

  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media (min-width: 375px) {
    top: calc(100% - 170px);
  }
`;

export const Title = styled.span<TextsProps>`
  font-family: "Lexend";
  font-style: normal;
  font-weight: ${({ fWeight }) => fWeight || "600"};
  font-size: ${({ fSize }) => fSize || "18px"};
  line-height: 20px;
  padding-bottom: 15px;
  color: #ffff;
`;

export const Description = styled.span<TextsProps>`
  font-family: "Lexend";
  font-style: normal;
  font-size: 15px;
  font-weight: ${({ fWeight }) => fWeight || "300"};
  line-height: 20px;
  color: #ffff;
`;

/*

@media (min-width: 425px) {
  .container-text-title {
    top: calc(100% - 185px);
  }
} */
