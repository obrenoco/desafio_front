import React from 'react';

import Title from './components/Title';
import Contracts from './components/Contracts';
import Chart from './components/Chart';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Title title="Contratos" />
      <Contracts />

      <Title title="Dados anuais" />
      <Chart />
    </Container>
  );
};

export default Dashboard;
