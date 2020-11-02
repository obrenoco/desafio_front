import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin: 1rem auto;
  background-color: white;
  padding: 5rem 2rem;
  border-radius: 4px;
  @media (max-width: 800px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 3rem 2rem;
  }
`;
