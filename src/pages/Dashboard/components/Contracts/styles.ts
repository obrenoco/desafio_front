import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 2rem 0 5rem;
  div:nth-child(6) {
    background-color: #1d3300;
  }
  @media (max-width: 800px) {
    grid: none;
    grid-gap: 12px;
  }
`;
export const Card = styled.div`
  width: 250px;
  height: 150px;
  padding: 30px;
  background-color: #447900;
  border-radius: 5px;
  margin: 0 0.3rem;
  color: white;
  @media (max-width: 800px) {
    width: 95%;
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
