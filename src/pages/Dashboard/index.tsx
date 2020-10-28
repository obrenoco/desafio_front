import React from 'react';

import Title from './components/Title';
import Contracts from './components/Contracts';
import Charts from './components/Charts';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Title title="Contratos" />
      <Contracts />

      <Title title="Dados anuais" />
      <Charts />
    </Container>
  );
};

export default Dashboard;
