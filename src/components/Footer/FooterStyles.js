import styled from "styled-components";

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    padding: 40px;
    width: 100%;
    background-color: #000;
    color: #fff;
`

export const TextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const RedesDiv = styled.div`
    display: flex;
    gap: 20px;

    & a {
        font-size: 25px;
        color: #819e4f;
    }
`