import React, { useState, useRef } from "react";
import {
  LinkHamburguesa,
  LinksDiv,
  MenuDiv,
  MenuHamburguesa,
  NavLinkStyled,
  NavLinkStyledMenu,
  StyledHeader,
  StyledNav,
} from "./HeaderStyles";
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle("open");
  };

  return (
    <>
      <StyledHeader>
        <div>
          <img
            onClick={() => navigate("/")}
            src="https://res.cloudinary.com/djtcmfax1/image/upload/v1699053758/c5oahomgby64gw859z5n.webp"
            alt="logo"
          />
        </div>
        <StyledNav>
          <LinksDiv>
            <NavLinkStyled to={"/"}>Home</NavLinkStyled>
            <NavLinkStyled to={"/about"}>Sobre nosotros</NavLinkStyled>
            <NavLinkStyled to={"/tienda"}>Tienda</NavLinkStyled>
            <NavLinkStyled to={"/contacto"}>Contacto</NavLinkStyled>
            <NavLinkStyled>
              <AiOutlineUser />
            </NavLinkStyled>
            <NavLinkStyled>
              <FiShoppingCart />
            </NavLinkStyled>
            <NavLinkStyled>
              <AiOutlineSearch />
            </NavLinkStyled>
          </LinksDiv>

          <MenuDiv ref={menuRef} onClick={toggleMenu}>
            <NavLinkStyledMenu>
            <AiOutlineMenu />
            {isOpen && (
              <MenuHamburguesa>
                  <LinkHamburguesa to={"/"}>
                    Home
                  </LinkHamburguesa>

                  <LinkHamburguesa to={"/about"}>
                    Sobre Nosotros
                  </LinkHamburguesa>


                  <LinkHamburguesa to={"/tienda"}>
                    Productos
                  </LinkHamburguesa>


                  <LinkHamburguesa to={"/contacto"}>
                    Contacto
                  </LinkHamburguesa>

              </MenuHamburguesa>
            )}
            </NavLinkStyledMenu>
          </MenuDiv>

        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;