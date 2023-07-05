import { NavbarContainer, NavbarContent, NavbarHamburguer, NavbarLinks } from "./Navbar.styled";
import Logo from "../../../public/logo.png";

function Navbar() {
  return (
      <NavbarContainer>
        <NavbarContent>
        <img src={Logo} alt="" />
        <NavbarLinks>
          <ul>
            <li>Nuestros servicios</li>
            <li>Testimonios</li>
            <li>Empresas</li>
            <li>Contacta con nosotros</li>
          </ul>
        </NavbarLinks>
        <NavbarHamburguer>
        <img src="https://www.svgrepo.com/show/506246/menu-hamburger.svg" alt="" />
        </NavbarHamburguer>
        </NavbarContent>
      </NavbarContainer>
  );
}

export default Navbar;
