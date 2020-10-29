import React from 'react';

import { Banner } from './styles';

const MainBanner: React.FC = () => {
  return (
    <Banner>
      <div>
        <img alt="Lock Icon" />
        <h2>Soluções</h2>
      </div>
      <p>
        Na Site Blindado oferecemos vários modelos de certificados para atender
        à diferentes tipos de negócios e serviços.
        <br />
        Veja abaixo qual se encaixa melhor com você.
        <br />
        Em caso de dúvidas entre em contato com nossos consultores.
      </p>
    </Banner>
  );
};

export default MainBanner;
