import styled from 'styled-components';

export const Container = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  background: #13161c;
  width: 100%;
  height: 8rem;
  color: #737a81;
  text-indent: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 120rem;
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
  :nth-child(1n) {
    padding: 0.6rem 4rem 0 4rem;
    flex: 3;
    max-width: 30rem;
    div {
      position: absolute;
      margin: -2rem 0 0 -1rem;
    }
  }
  :nth-child(n + 2) {
    padding: 0.6rem 0 0 0;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    max-width: 40rem;
    align-self: center;
  }
`;
