import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  &#navscrool {
    background: linear-gradient(180deg, #5c1c3b 0%, #040304 100%);
    box-shadow: 0px 2px 8px #040304;
    border-radius: 0px 0px 8px 8px;
  }

  &#nav {
    backdrop-filter: blur(5px);
  }
`;

export const Navigator = styled.nav`
  width: 100vw;
  height: 20vh;

  background: rgba(63, 0, 30, 0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
`;

export const ListLogoIcon = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0;
  align-items: center;
`;

export const ListItems = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  background: linear-gradient(
    180deg,
    rgb(63 0 30 / 29%),
    #49162fad,
    rgba(63, 0, 30, 0.46)
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
  height: 100vh;
`;

export const Ancor = styled.a`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  text-decoration: none;
`;
