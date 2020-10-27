import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 2rem 0 5rem;

  div:nth-child(1) {
    margin-left: 0;
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
