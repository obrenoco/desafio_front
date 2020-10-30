import React from 'react';

import Title from './components/Title';
import Contracts from './components/Contracts';
import Chart from './components/Chart';
import Table from './components/Table';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Title title="Contratos" />
      <Contracts />

      <Title title="Gráfico de contratos" />
      <Chart />

      <Title title="Tabela de contratos" />
      <Table />
    </Container>
  );
};

export default Dashboard;
