import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto 5rem;
  width: fit-content;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  div:nth-child(6) {
    background-color: #1d3300;
  }
  @media (max-width: 800px) {
    grid: none;
    grid-gap: 12px;
  }
`;

export const Card = styled.div`
  height: 150px;
  padding: 32px;
  background-color: #447900;
  border-radius: 5px;
  margin: 0 0.3rem;
  color: white;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }

  h3 {
    font-size: 14px;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 1.3rem 0 0;
  p {
    font-weight: 700;
  }
  strong {
    font-size: 30px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 32px;
  p {
    font-size: 16px;
    font-weight: 700;
  }

  strong {
    font-size: 30px;
  }
`;
