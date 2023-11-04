import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    padding: 20px;
    height: 200px;

    & img {
        height: 150px;
        width: 500px;
    }
`

export const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinksDiv = styled(StyledNav)`
    @media (max-width: 768px) {
        display: none;
    }

    & a {
        font-weight: 400;
        font-size: 30px;
        color: #353d3a;
        padding: 30px;
    }

    & a:hover {
        background-color: #fff;
        padding-top: 150px;
    }
`

export const MenuDiv = styled.div`
    display: none;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }

    & a {
        color: #353d3a;
    }
`