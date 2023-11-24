import styled from "styled-components";

export const NosotrosDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 120px;

    & img {
        margin-bottom: 100px;
        border-radius: 30px;
        width: 60%;
    }
    
  @media (max-width: 700px) {
    & img {
      display: none;
    }
  }
`

export const NosotrosTextDiv = styled(NosotrosDiv)`
    width: 50%;

    & h1 {
        font-size: 50px;
        letter-spacing: 5px;
    }

    & p {
        font-size: 20px;
        line-height: 25px;
    }

    & span {
        font-weight: 600;
    }

    @media (max-width: 700px) {
      width: 80%;
      text-align: center;
    }
`