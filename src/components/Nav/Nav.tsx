import { Link } from "react-router-dom";
import { useState } from "react";
import { Header, Navigator, ListLogoIcon, ListItems, Ancor } from "./style";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu.svg";

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const navShow = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Header id="navscrool">
        <Navigator>
          <ListLogoIcon>
            <li>
              <Link to="/">
                <Ancor>
                  <img id="iconlogo" src={Logo} alt="Logo" />
                </Ancor>
              </Link>
            </li>
            <li id="iconmenu" onClick={navShow}>
              <img src={MenuIcon} alt="Menu" />
            </li>
          </ListLogoIcon>

          <ListItems>
            <li>
              <Link to="/">
                <Ancor>Home</Ancor>
              </Link>
            </li>
            <li>
              <Ancor>Sobre nós</Ancor>
            </li>
            <li>
              <Ancor>Unidades</Ancor>
            </li>
            <li>
              <Link to="/login">
                <Ancor>Login</Ancor>
              </Link>
            </li>
          </ListItems>
        </Navigator>
      </Header>
    </>
  );
};
