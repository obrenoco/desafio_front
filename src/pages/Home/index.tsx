import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

// import * as DataActions from '../../store/modules/test/actions';

export default function Home() {
  return (
    <Container>
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
    </Container>
  );
}
