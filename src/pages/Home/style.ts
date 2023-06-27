import styled from "styled-components";
import { BackgroundImg } from "../../components/BackgroundImg/style";
import { Title } from "../../components/Texts/style";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: #000000;
`;

export const Body = styled.body`
  /* width: 100vw;
  height: 100vh; */
  background: linear-gradient(
    180deg,
    rgba(255, 77, 163, 0.38) 0%,
    rgba(255, 77, 163, 0) 12.48%,
    rgba(255, 77, 163, 0.38) 26.81%,
    rgba(255, 77, 163, 0.0836) 46.62%,
    rgba(0, 0, 0, 0.38) 90%,
    rgba(255, 77, 163, 0.38) 97.81%
  );
`;

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  /* padding-right: 15px; */

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  margin-bottom: 45px;

  &::-webkit-scrollbar {
    /* width: 10px; */
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const TitleSection = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;

  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const ContainerAboutUs = styled.section`
  position: relative;

  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const CreateAccount = styled.section`
  position: relative;
  height: 185px;

  @media (min-width: 768px) {
    margin-top: 175px;
  }
`;

export const ContentButtonAboutUs = styled.div`
  position: relative;
  bottom: calc(100px - 200px);
  margin-left: 15px;

  @media (min-width: 768px) {
    bottom: calc(100px - 125px);
  }
`;

export const ContainerCta = styled(BackgroundImg)`
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ContentCta = styled.div`
  position: absolute;
  /* top: calc(100% - 87%); */
  padding-top: 13px;
  display: flex;
  align-items: center;

  width: 270px;

  @media (min-width: 375px) {
    /* top: calc(100% - 85%); */
    padding-top: 17px;
    width: 326px;
  }

  @media (min-width: 425px) {
    /* top: calc(100% - 80%); */
    padding-top: 26px;
    width: 364px;
  }

  @media (min-width: 768px) {
    padding-top: 43px;
    width: 768px;
    flex-direction: column;
  }
`;

export const SubTitle = styled(Title)`
  padding-bottom: 0;

  @media (min-width: 425px) {
    font-size: ${({ media425fSize }) => media425fSize};
  }

  @media (min-width: 768px) {
    font-size: ${({ media768fSize }) => media768fSize};
    line-height: 40px;
    margin-bottom: 10px;
  }
`;

export const ContainerContact = styled.article`
  position: relative;
  padding: 0 15px;

  @media (min-width: 768px) {
    display: flex;
    /* justify-content: space-between; */
    margin: 0 20px;
    padding: 0;
    align-items: baseline;
  }
`;

export const ContentSocialMedia = styled.div`
  margin: 15px 0;

  @media (min-width: 768px) {
    margin-left: 100px;
  }
`;

export const WrapperContact = styled.div``;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 15px 0;

  @media (min-width: 765px) {
    padding: 43px 0px 15px;
  }
`;

export const FooterSignature = styled.span`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  color: #ffff;

  @media (min-width: 425px) {
    font-size: 12px;
  }
`;
