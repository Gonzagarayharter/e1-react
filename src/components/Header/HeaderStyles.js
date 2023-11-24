import styled, { keyframes } from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    padding: 20px;
    height: 200px;
    background: rgb(41,128,92);
    background: linear-gradient(90deg, rgba(41,128,92,1) 0%, rgba(22,152,152,1) 100%);

    & img {
        height: 150px;
        width: 500px;
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        justify-content: space-between;        
        position: absolute;
        background: transparent;
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

    &:hover {
        background-color: #fff;
        padding-top: 138px;
    }
`

export const openMenu = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const MenuDiv = styled.div`
    display: none;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
    @media (max-width: 1400px) {
        display: flex;
    }

    &.open {
    animation: ${openMenu} 0.3s ease-in-out;
    background-color: aliceblue;
    }
`

export const NavLinkStyledMenu = styled(NavLink)`
    color: #353d3a;
`