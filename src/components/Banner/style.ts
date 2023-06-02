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
    height: ${({ media320height }) => media320height || "24vh"};
  }

  @media (min-width: 375px) {
    background-image: url(${({ imgMobile }) => imgMobile});
    height: ${({ media375height }) => media375height || "30vh"};
  }

  @media (min-width: 425px) {
    background-image: url(${({ imgMobile }) => imgMobile});

    height: ${({ media425height }) => media425height || "35vh"};
  }

  @media (min-width: 768px) {
    background-image: url(${({ imgDesk }) => imgDesk});
    height: ${({ media768height }) => media768height};
    border-radius: 0;
    margin-top: 0px;
  }
`;
