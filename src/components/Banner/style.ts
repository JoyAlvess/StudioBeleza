import styled from "styled-components";
import { BannerProps } from "./Banner.types";
import { BackgroundImg } from "../BackgroundImg/style";

export const BannerImg = styled(BackgroundImg)<BannerProps>`
  min-width: 100%;

  margin-top: ${({ mTop }) => mTop};

  background-size: cover;
  background-attachment: initial;
  background-repeat: no-repeat;

  @media (min-width: 320px) {
    background-image: url(${({ imgMobile }) => imgMobile});
    height: 24vh;
  }

  @media (min-width: 375px) {
    background-image: url(${({ imgMobile }) => imgMobile});
    height: 30vh;
  }

  @media (min-width: 425px) {
    background-image: url(${({ imgMobile }) => imgMobile});
    height: 35vh;
  }

  @media (min-width: 768px) {
    margin-top: 100px;
    background-image: url(${({ imgDesk }) => imgDesk});
    height: 64vh;
    border-radius: 0;
  }
`;
