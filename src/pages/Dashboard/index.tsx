import React from 'react';

import Title from './components/Title';
import Contracts from './components/Contracts';
import Table from './components/Table';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Title title="Contratos" />
      <Contracts />

      <Title title="Dados anuais" />
      <Table />
    </Container>
  );
};

export default Dashboard;
