import styled from "styled-components";

export const NosotrosDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;

    & img {
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
`