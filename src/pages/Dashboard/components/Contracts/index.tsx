import React from 'react';
import Tooltip from '../Tooltip';

import { Container, Card, Value } from './styles';

const Contracts: React.FC = () => {
  return (
    <Container>
      <Card>
        <Tooltip description="Contratos ativos no mês corrente" />
        <h3>Ativos</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>

      <Card>
        <Tooltip description="Contratos com pagamento atrasado a receber no mês corrente" />
        <h3>Contratos atrasados</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>

      <Card>
        <Tooltip description="Valor atrasado a receber no mes corrente" />
        <h3>Valor atrasado</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>

      <Card>
        <Tooltip description="Contratos novos fechados no mês corrente" />
        <h3>Contratos novos</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>

      <Card>
        <Tooltip description="Valor de contratos novos fechados no mês corrente" />
        <h3>Valores novos</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>

      <Card>
        <Tooltip description="Total de valor a receber no mês corrente" />
        <h3>Total à receber</h3>
        <Value>
          <p>R$</p>
          <strong>200.000,00</strong>
        </Value>
      </Card>
    </Container>
  );
};

export default Contracts;
