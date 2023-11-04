import React from "react";
import { LinksDiv, MenuDiv, StyledHeader, StyledNav } from "./HeaderStyles";
import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div>
          <img
            src="https://res.cloudinary.com/djtcmfax1/image/upload/v1699053758/c5oahomgby64gw859z5n.webp"
            alt="logo"
          />
        </div>
        <StyledNav>
          <LinksDiv>
            <a href="#">Home</a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Tienda</a>
            <a href="#">
              <AiOutlineUser />
            </a>
            <a href="#">
              <FiShoppingCart />
            </a>
            <a href="#">
              <AiOutlineSearch />
            </a>
          </LinksDiv>
          <MenuDiv>
            <a href="#">
              <AiOutlineMenu />
            </a>
          </MenuDiv>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;
