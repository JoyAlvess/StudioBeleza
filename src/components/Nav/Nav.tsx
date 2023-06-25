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
              <Ancor href="#">
                <img id="iconlogo" src={Logo} alt="Logo" />
              </Ancor>
            </li>
            <li id="iconmenu" onClick={navShow}>
              <img src={MenuIcon} alt="Menu" />
            </li>
          </ListLogoIcon>

          <ListItems>
            <li>
              <Ancor href="#">Home</Ancor>
            </li>
            <li>
              <Ancor href="#">Sobre nós</Ancor>
            </li>
            <li>
              <Ancor href="#">Unidades</Ancor>
            </li>
            <li>
              <Ancor href="#">Contato</Ancor>
            </li>
          </ListItems>
        </Navigator>
      </Header>
    </>
  );
};
