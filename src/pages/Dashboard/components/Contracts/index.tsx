import React, { useEffect, useState } from 'react';
import api from 'services/MockedApi';
import Tooltip from '../Tooltip';

import { Container, CardsList, Card, Value, Total } from './styles';

interface ContractProps {
  data: {
    dataCards: {
      billing: {
        monthlyBilling: number;
      };
      contracts: {
        activeContracts: number;
        overdueContracts: number;
        overdueValue: number;
        soldContracts: number;
        totalContracts: number;
        totalReceivedValue: number;
      };
    };
  };
}

const Contracts: React.FC = () => {
  const [contract, setContract] = useState<ContractProps>();

  useEffect(() => {
    api.get('').then(response => {
      setContract(response.data);
    });
  }, []);

  console.log(contract);

  return (
    <Container>
      <CardsList>
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
      </CardsList>

      <Total>
        <p>Total recebido no último mês</p>
        <strong>R$ 300.000,00</strong>
      </Total>
    </Container>
  );
};

export default Contracts;
