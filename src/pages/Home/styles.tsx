import styled from 'styled-components';
import MainBanner from '../../assets/images/banner/banner-blindagem.jpg';

export const Container = styled.div`
  background-image: url("${MainBanner}");
  background-size: cover;
  background-position: center;
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
