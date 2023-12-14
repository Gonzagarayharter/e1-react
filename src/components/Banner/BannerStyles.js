import styled from "styled-components";

export const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background-color: ${({color}) => (color ? "linear-gradient(90deg, rgba(86,113,102,1) 0%, rgba(167,181,175,1) 100%)" : "#fff")};
    padding: 30px;
    font-size: 70px;

    @media (max-width: 700px) {
    font-size: 50px;
    }

    @media (max-width: 470px) {
    font-size: 30px;
    }

    @media (max-width: 315px) {
    font-size: 20px;
    }
`