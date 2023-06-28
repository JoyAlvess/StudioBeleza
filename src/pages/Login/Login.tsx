import { Link } from "react-router-dom";
import { Container, Logo, ButtonAccess, Wrapper, Label, Ancor } from "./style";

import { Input } from "../../components/Input";

import IconAcessarConta from "../../assets/logoAcessarConta.svg";
import IconEmail from "../../assets/iconEmail.svg";
import IconLock from "../../assets/iconLock.svg";

export const Login = () => {
  return (
    <Container>
      <Logo>
        <img src={IconAcessarConta} alt="Logo Acessar minha conta" />
      </Logo>

      <Input img={IconEmail} alt="email" placeholder="e-mail" type="email" />
      <Input img={IconLock} alt="senha" placeholder="senha" type="password" />
      <Link to="/perfil">
        <ButtonAccess text="Acessar" fSize="18px" />
      </Link>

      <Wrapper>
        <Label>
          Não possui cadastro? <Ancor to="/cadastre-se">Clique aqui</Ancor>
        </Label>
      </Wrapper>
    </Container>
  );
};
