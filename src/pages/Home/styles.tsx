import styled from 'styled-components';
import MainBanner from '../../assets/images/banner/banner-trust.jpg';

export const Container = styled.div``;

export const Banner = styled.div`
  background-image: url("${MainBanner}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  backdrop-filter: brightness(0.68) ;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: white;
  padding: 0 5rem;
  @media (max-width: 800px) {
    padding: 0 2rem;
    height: 92vh;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    content: url("https://www.siteblindado.com/images/certificado-ssl.svg");
    width: 45px;
    margin-right: 12px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    max-width: 65rem;
  }
  p {
    font-size: 24px;
    font-weight: 100;
    margin-top: 1rem;
    max-width: 50vw;
    @media (max-width: 800px) {
      font-size: 1.4rem;
      max-width: 90%;
    }
  }
`;

export const Solutions = styled.div`
  text-align: center;
  padding: 6rem 0 0;
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
  margin: 4rem auto;
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
