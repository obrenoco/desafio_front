import React from 'react';

import Contracts from './components/Contracts';

import { Container } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <h2>Contratos</h2>
      <span />
      <Contracts />
    </Container>
  );
};

export default Dashboard;
