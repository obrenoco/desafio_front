import styled from 'styled-components';
import MainBanner from '../../assets/images/banner/banner-blindagem.jpg';

export const Container = styled.div``;

export const Banner = styled.div`
  background-image: url("${MainBanner}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: white;
  padding: 0 5rem;

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
  }
`;

export const Solutions = styled.div`
  text-align: center;
  padding: 6rem 0;
  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    color: #737a81;
    font-size: 18px;
  }
  span {
    display: block;
    height: 0.2rem;
    width: 36%;
    background: #74b61b;
    margin: 5rem auto;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  padding: 0 3rem;
  max-width: 85rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: 0 30px;
    margin: 0 1rem;
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
