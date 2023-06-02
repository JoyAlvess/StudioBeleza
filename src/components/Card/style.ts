import styled from "styled-components";
import { CardProps } from "./Card.types";

export const WrapperCard = styled.div<CardProps>`
  display: block;
  padding-right: 15px;

  &:last-child {
    padding-right: 0;
  }
`;

export const CardImg = styled.div<CardProps>`
  filter: drop-shadow(6px 3px 6px rgba(75, 24, 99, 0.44));
  margin-bottom: 7px;

  @media (min-width: 768px) {
    img {
      width: 150px;
    }
  }
`;

export const CardLabel = styled.span<CardProps>`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #ffffff;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
