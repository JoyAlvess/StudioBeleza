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

  @media (min-width: 768px) {
    height: 14vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ListLogoIcon = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0;
  align-items: center;

  @media (min-width: 768px) {
    padding-top: 0;

    #iconlogo {
      padding-top: 0;
    }

    #iconmenu {
      display: none;
      padding-top: 0;
    }
  }
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

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    background: transparent;

    box-shadow: none;
    border-radius: 0;
    height: 0;

    li {
      &:nth-child(even) {
        padding: 0 15px;
      }

      &:nth-last-child(1) {
        margin-right: 15px;
      }
    }
  }

  @media (min-width: 1024px) {
    li {
      &:nth-child(even) {
        padding: 0 30px;
      }
    }
  }

  @media (min-width: 1440px) {
    li {
      &:nth-child(even) {
        padding: 0 30px;
      }

      &:nth-last-child(1) {
        margin-right: 15px;
      }
    }
  }
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
