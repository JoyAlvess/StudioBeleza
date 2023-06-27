import "../App.css";
import {
  ContainerBanner,
  ContainerCard,
  ContentCard,
  TitleSection,
  ContainerAboutUs,
  CreateAccount,
  ContentButtonAboutUs,
  ContainerCta,
  ContentCta,
  SubTitle,
  ContainerContact,
  ContentSocialMedia,
  WrapperContact,
  WrapperIcons,
  Footer,
  FooterSignature,
} from "./style";

import { Nav } from "../components/Nav";
import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Texts } from "../components/Texts";
import { Button } from "../components/Button";
import { BackgroundImg } from "../components/BackgroundImg/style";
import { IconAndLabel } from "../components/IconAndLabel";

import ImgSobrancelha from "../assets/cardSobrancelha.png";
import ImgManicure from "../assets/cardManicure.png";
import ImgPedicure from "../assets/cardPedicure.png";
import ImgCabeleleiro from "../assets/cardCabeleleiro.png";
import ImgExtensaoDeCilios from "../assets/cardExtensaoDeCilios.png";
import ImgEscova from "../assets/cardEscova.png";
import ImgBronzeamento from "../assets/cardBronzeamento.png";

import ImgMobileBanner from "../assets/bannerMobile.png";
import ImgMobileAboutUs from "../assets/sobre-nos.png";

import ImgDeskBanner from "../assets/bannerDesktop.png";
import ImgDeskAboutUs from "../assets/sobreNosDesktop.png";

import ImgMobileCta from "../assets/agendeAgora.png";
import ImgDeskCta from "../assets/agendeAgoraDesk.png";

import IconMap from "../assets/iconMap.svg";
import IconFacebook from "../assets/iconFacebook.svg";
import IconInstagram from "../assets/iconInstagram.svg";
import IconTwitter from "../assets/iconTwitter.svg";

export const Home = () => {
  return (
    <>
      <Nav />

      <ContainerBanner>
        <Banner
          mTop="100px"
          imgMobile={ImgMobileBanner}
          imgDesk={ImgDeskBanner}
          media768height="65vh"
        />
      </ContainerBanner>

      <ContainerCard id="conatiner-cards">
        <TitleSection>Procedimentos mais procurados</TitleSection>
        <ContentCard id="content-cards">
          <Card img={ImgBronzeamento} alt="Bronzeamento" label="Bronzeamento" />
          <Card
            img={ImgExtensaoDeCilios}
            alt="Extensão de Cílios"
            label="Extensão de Cílios"
          />
          <Card img={ImgSobrancelha} alt="Sobrancelha" label="Sobrancelha" />
          <Card img={ImgManicure} alt="Manicure" label="Manicure" />
          <Card img={ImgPedicure} alt="Pedicure" label="Pedicure" />
          <Card img={ImgCabeleleiro} alt="Cabeleleiro" label="Cabeleleiro" />
          <Card img={ImgEscova} alt="Escova" label="Escova" />
        </ContentCard>
      </ContainerCard>

      <ContainerAboutUs>
        <BackgroundImg>
          <Banner
            imgMobile={ImgMobileAboutUs}
            imgDesk={ImgDeskAboutUs}
            media320height="30vh"
            media375height="36vh"
            media425height="40vh"
            media768height="50vh"
          />

          <Texts
            padding="0 23px"
            title="Sobre nós"
            text="Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. 
          Ut enim ad minim."
          />
        </BackgroundImg>
      </ContainerAboutUs>

      <CreateAccount>
        <Texts
          title="Crie sua conta"
          text="Para agendar, basta criar a sua conta 
            e marca o dia e horário desejado. Tudo online, sem dor de cabeça."
        />
        <ContentButtonAboutUs>
          <Button
            text="Cadastre-se"
            mTop="15px"
            width="145px"
            height="30px"
            media425Height="35px"
            media425Width="155px"
            media425Mtop="0"
            media768Width="185px"
            media768Height="40px"
            media768fSize="17px"
          />
        </ContentButtonAboutUs>
      </CreateAccount>

      <ContainerCta>
        <Banner
          imgMobile={ImgMobileCta}
          imgDesk={ImgDeskCta}
          media320height="11vh"
          media375height="12vh"
          media425height="14vh"
          media768height="27vh"
        />

        <ContentCta>
          <SubTitle
            fSize="14px"
            media425fSize="16px"
            media768fSize="25px"
            fWeight="400"
          >
            Agende qualquer procedimento!
          </SubTitle>
          <Button
            text="Agendar agora!"
            fSize="12px"
            width="145px"
            height="30px"
            mTop="0"
            media425Mtop="0"
            media425fSize="14px"
            media425Width="165px"
            media425Height="35px"
          />
        </ContentCta>
      </ContainerCta>

      <ContainerContact>
        <WrapperContact>
          <SubTitle fSize="15px" fWeight="400">
            Nossas Unidades
          </SubTitle>

          <IconAndLabel
            href="#"
            icon={IconMap}
            alt="Shopping Plaza Sul - Piso 0 - SP 
          Contato: (11) 0000-3894"
            adress="Shopping Plaza Sul - Piso 0 - SP"
            contact="Contato: (11) 0000-3894"
          />

          <IconAndLabel
            href="#"
            icon={IconMap}
            alt="Rua Jacquey 135 - BA
          Contato: (11) 0000-3575"
            adress="Rua Jacquey 135 - BA"
            contact="Contato: (11) 0000-3575"
          />

          <IconAndLabel
            href="#"
            icon={IconMap}
            alt="Av Caminho do Mar 3143 - SP
          Contato: (11) 0000-3575"
            adress="Av Caminho do Mar 3143 - SP"
            contact="Contato: (11) 0000-3575"
          />
        </WrapperContact>

        <ContentSocialMedia>
          <SubTitle fSize="15px" fWeight="400">
            Redes Sociais
          </SubTitle>

          <WrapperIcons>
            <IconAndLabel href="#" icon={IconFacebook} alt="Facebook" />
            <IconAndLabel href="#" icon={IconInstagram} alt="Instagram" />
            <IconAndLabel href="#" icon={IconTwitter} alt="Twitter" />
          </WrapperIcons>
        </ContentSocialMedia>
      </ContainerContact>

      <Footer>
        <FooterSignature>
          © 2023 Criado por JoyAlves, Todos os Direitos Reservados.
        </FooterSignature>
      </Footer>
    </>
  );
};
