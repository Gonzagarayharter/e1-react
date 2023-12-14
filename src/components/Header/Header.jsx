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
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import ModalCart from "../Cart/ModalCart";
import { AnimatePresence } from "framer-motion";

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
          <ModalCart />
          <LinksDiv>
            <NavLinkStyled to={"/"}>Home</NavLinkStyled>
            <NavLinkStyled to={"/about"}>Sobre nosotros</NavLinkStyled>
            <NavLinkStyled to={"/tienda"}>Tienda</NavLinkStyled>
            <NavLinkStyled to={"/contacto"}>Contacto</NavLinkStyled>
            <NavLinkStyled>
              <AiOutlineUser />
            </NavLinkStyled>
              <CartIcon />
            <NavLinkStyled>
              <AiOutlineSearch />
            </NavLinkStyled>
          </LinksDiv>

          <AnimatePresence>
          <MenuDiv 
          ref={menuRef} onClick={toggleMenu}
          >
            <NavLinkStyledMenu>
            <AiOutlineMenu />
            {isOpen && (
              <MenuHamburguesa 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              whileHover={{ scale: 1.1 }}>
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

                  <LinkHamburguesa>
                    <CartIcon />
                  </LinkHamburguesa>

              </MenuHamburguesa>
            )}
            </NavLinkStyledMenu>
          </MenuDiv>
          </AnimatePresence>

        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;