import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    padding: 20px;
    height: 120px;
    background: rgb(41,128,92);
    background: linear-gradient(90deg, rgba(41,128,92,1) 0%, rgba(22,152,152,1) 100%);

    & img {
        height: 130px;
        width: 400px;
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        justify-content: space-between;
    }

    @media (max-width: 580px) {
        & img {
            width: 350px;
            height: 140px;
        }
    }

    @media (max-width: 450px) {
        & img {
            width: 250px;
            height: 140px;
        }
    }
`

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinksDiv = styled(StyledNav)`
    @media (max-width: 1400px) {
        display: none;
    }
`

export const NavLinkStyled = styled(NavLink)`
    font-weight: 400;
    font-size: 30px;
    color: #353d3a;
    padding: 30px;

    span {
    padding: 3px;
    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid;
    font-size: 0.9rem;
  }

    &:hover {
        background-color: #fff;
        padding-top: 58px;
    }

    @media (max-width: 1560px) {
        font-size: 22px;
    }

    @media (max-width: 1400px) {
        &:hover {
        color: white;
        background-color: transparent;
        padding: 0px;
    }
    }
`

export const MenuDiv = styled.div`
    display: none;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
    @media (max-width: 1400px) {
        display: flex;
    }
`

export const MenuHamburguesa = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 120px;
    right: 0px;
    gap: 20px;
    width: 100%;
    position: absolute;
    padding: 20px;
    z-index: 100;
    background: rgb(41,128,92);
    background: linear-gradient(90deg, rgba(41,128,92,1) 0%, rgba(22,152,152,1) 100%);
`

export const LinkHamburguesa = styled(NavLink)`
    font-weight: 400;
    font-size: 35px;
    color: #353d3a;

    &:hover {
        color: #fff;
    }
`

export const NavLinkStyledMenu = styled(NavLink)`
    color: #353d3a;
`

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;