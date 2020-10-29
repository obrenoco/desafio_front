import styled from 'styled-components';

import MainBanner from '../../../../assets/images/banner/banner-trust.jpg';

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
