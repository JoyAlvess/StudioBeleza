import styled from "styled-components";
import { TextsProps } from "./Texts.types";

export const ContainerTexts = styled.div<TextsProps>`
  position: absolute;
  /* top: calc(100% - 165px); */
  top: calc(100% - 190px);

  padding: ${({ padding }) => padding || " 0 15px"};

  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media (min-width: 375px) {
    top: calc(100% - 203px);
  }

  @media (min-width: 425px) {
    top: calc(100% - 210px);
    width: 350px;
  }

  @media (min-width: 768px) {
    top: calc(100% - 274px);
    width: auto;
  }
`;

export const Title = styled.span<TextsProps>`
  font-family: "Lexend";
  font-style: normal;
  font-weight: ${({ fWeight }) => fWeight || "600"};
  font-size: ${({ fSize }) => fSize || "18px"};
  line-height: 22px;
  padding-bottom: 15px;
  color: #ffff;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Description = styled.span<TextsProps>`
  font-family: "Lexend";
  font-style: normal;
  font-size: 15px;
  font-weight: ${({ fWeight }) => fWeight || "300"};
  line-height: 20px;
  color: #ffff;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;

    padding: 0 175px 0 0;
  }
`;

/*

@media (min-width: 425px) {
  .container-text-title {
    top: calc(100% - 185px);
  }
} */
