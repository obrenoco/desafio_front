import React, { useEffect, useState } from 'react';
import api from 'services/MockedApi';
import formatDataCards from 'utils/formatDataCards';
import { DataProps } from 'interfaces';
import Tooltip from '../Tooltip';

import { Container, CardsList, Card, Value, Total } from './styles';

const Contracts: React.FC = () => {
  const [contract, setContract] = useState<DataProps>();

  useEffect(() => {
    api.get('').then(response => {
      setContract(response.data);
    });
  }, []);

  const monthlyBilling = contract?.data.dataCards.billing.monthlyBilling!;
  const activeContracts = contract?.data.dataCards.contracts.activeContracts!;
  const overdueContracts = contract?.data.dataCards.contracts.overdueContracts!;
  const overdueValue = contract?.data.dataCards.contracts.overdueValue!;
  const soldContracts = contract?.data.dataCards.contracts.soldContracts!;
  const totalContracts = contract?.data.dataCards.contracts.totalContracts!;
  const totalReceivedValue = contract?.data.dataCards.contracts
    .totalReceivedValue!;

  const formatedMonthlyBilling = formatDataCards(monthlyBilling);
  const formatedActiveContracts = formatDataCards(activeContracts);
  const formatedOverdueContracts = formatDataCards(overdueContracts);
  const formatedOverdueValue = formatDataCards(overdueValue);
  const formatedSoldContracts = formatDataCards(soldContracts);
  const formatedTotalContracts = formatDataCards(totalContracts);
  const formatedReceivedValue = formatDataCards(totalReceivedValue);

  return (
    <Container>
      <CardsList>
        <Card>
          <Tooltip description="Contratos ativos no mês corrente" />
          <h3>Ativos</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedActiveContracts}</strong>
          </Value>
        </Card>

        <Card>
          <Tooltip description="Contratos com pagamento atrasado a receber no mês corrente" />
          <h3>Contratos atrasados</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedOverdueContracts}</strong>
          </Value>
        </Card>

        <Card>
          <Tooltip description="Valor atrasado a receber no mes corrente" />
          <h3>Valor atrasado</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedOverdueValue}</strong>
          </Value>
        </Card>

        <Card>
          <Tooltip description="Contratos novos fechados no mês corrente" />
          <h3>Contratos novos</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedSoldContracts}</strong>
          </Value>
        </Card>

        <Card>
          <Tooltip description="Valor de contratos novos fechados no mês corrente" />
          <h3>Valores novos</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedTotalContracts}</strong>
          </Value>
        </Card>

        <Card>
          <Tooltip description="Total de valor a receber no mês corrente" />
          <h3>Total à receber</h3>
          <Value>
            <p>R$</p>
            <strong>{formatedReceivedValue}</strong>
          </Value>
        </Card>
      </CardsList>

      <Total>
        <p>Total recebido no último mês</p>
        <strong>R$ {formatedMonthlyBilling}</strong>
      </Total>
    </Container>
  );
};

export default Contracts;
