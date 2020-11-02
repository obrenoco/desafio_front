import styled from 'styled-components';

export const Solutions = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-color: #fff;
  @media (max-width: 800px) {
    padding: 6rem 1rem 0;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: #737a81;
    font-size: 18px;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto 0;
  padding: 0 3rem;
  max-width: 85rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: 0 30px;
    margin: 0 1rem;
    @media (max-width: 800px) {
      margin: 2rem 1rem;
    }
  }

  strong {
    font-size: 24px;
    font-weight: 400;
    margin: 1rem 0 0.3rem;
  }

  img {
    width: 55px;
  }

  a {
    margin-top: 1rem;
    color: #74b61b;
    font-size: 18px;
  }
`;
