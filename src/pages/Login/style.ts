import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #5c1c3b 0%, #040304 100%);
`;

export const Logo = styled.div`
  margin-bottom: 45px;
`;

export const ButtonAccess = styled(Button)`
  width: 278px;
  height: 46px;
  margin: 15px 0 0;
  box-shadow: 0 rgba(255, 255, 255, -0.75);

  @media (min-width: 425px) {
    width: 348px;
  }
`;

export const Wrapper = styled.div`
  width: 278px;
  display: flex;
  justify-content: end;
  align-items: end;
  margin-top: 15px;

  @media (min-width: 425px) {
    width: 348px;
  }
`;

export const Label = styled.span`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-family: Lexend;
  font-weight: 200;
  text-align: end;
`;

export const Ancor = styled(Link)`
  color: #d891f2;
  cursor: pointer;
`;
