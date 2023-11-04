import styled from "styled-components";

export const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    background-color: ${({color}) => (color ? "linear-gradient(90deg, rgba(86,113,102,1) 0%, rgba(167,181,175,1) 100%)" : "#fff")};
    padding: 30px;
    font-size: 100px;
`