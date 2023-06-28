// import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  ButtonAccess,
  Label,
  Ancor,
  Wrapper,
} from "../Login/style";
import LogoAccess from "../../assets/logoAcessarConta.svg";
import IconEmail from "../../assets/iconEmail.svg";
import IconLock from "../../assets/iconLock.svg";
import IconPhone from "../../assets/iconPhone.svg";

import { Input } from "../../components/Input";

export const Register = () => {
  return (
    <Container>
      <Logo>
        <img width="70px" src={LogoAccess} alt="Logo cadastre-se" />
      </Logo>

      <Input
        img={IconEmail}
        alt="digite seu email"
        placeholder="e-mail"
        type="email"
      />
      <Input
        img={IconPhone}
        alt="digite o número do seu celular"
        placeholder="telefone"
        type="text"
      />
      <Input
        img={IconLock}
        alt="digite sua senha"
        placeholder="senha"
        type="password"
      />
      <Input
        img={IconLock}
        alt="confirme sua senha"
        placeholder="confirme sua senha"
        type="password"
      />

      <ButtonAccess text="Cadastrar" fSize="18px" />

      <Wrapper>
        <Label>
          Já possui cadastro?
          <Ancor to="/login"> Clique aqui</Ancor>
        </Label>
      </Wrapper>
    </Container>
  );
};
