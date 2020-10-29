import styled from 'styled-components';

export const Products = styled.div`
  background-color: #eeeeee;
  padding: 4rem 10rem;
  @media (max-width: 800px) {
    padding: 4rem 1.5rem;
  }
  h2 {
    /* text-align: center; */
    font-size: 24px;
  }

  span {
    display: block;
    height: 0.2rem;
    width: 4%;
    background: #74b61b;
    margin: 0.5rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 16px;
  margin: 3rem 0 5rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  color: #21272e;
  background-color: #fff;
  border: 4px solid transparent;
  transition: border.2s;
  :hover {
    border: 4px solid #74b61b;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
    @media (max-width: 800px) {
      flex-direction: column;
      a {
        margin-top: 16px;
      }
      button {
        width: 100%;
      }
    }
  }
  img {
    width: 32px;
    margin-right: 12px;
  }
  h3 {
    font-size: 24px;
    display: inline-flex;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 30px;
    font-size: 16px;
  }
  strong {
    display: block;
    line-height: 2rem;
  }
  ins {
    text-decoration: none;
    font-weight: 400;
  }
  button {
    padding: 0.8rem 2.5rem;
    background-color: #13161c;
    color: white;
    border-radius: 3px;
    border: 0;
    font-weight: 700;
    transition: background-color 0.2s;
    :hover {
      background-color: #74b61b;
    }
  }
  a {
    color: #74b61b;
    font-size: 16px;
    font-weight: 700;
  }
`;
