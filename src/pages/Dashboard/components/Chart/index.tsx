import React, { useEffect, useState } from 'react';
import * as Recharts from 'recharts';
import api from 'services/MockedApi';

import { Container, Grid } from './styles';

interface ValueProps {
  data: {
    dataCharts: {
      monthlyContractOverdue: {
        labels: string[];
        series: number[][];
        totalOverdueValue: number;
      };
      totalPaid: {
        labels: string[];
        series: number[][];
        totalOverdueValue: number;
      };
      totalSold: {
        labels: string[];
        series: number[][];
        totalOverdueValue: number;
      };
    };
    reference: {
      referenceMonth: 'string';
      referenceYear: 'string';
    };
  };
}

const Chart: React.FC = () => {
  const {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } = Recharts;

  const [value, setValue] = useState<ValueProps>();

  useEffect(() => {
    api.get('').then(response => {
      setValue(response.data);
    });
  }, []);

  const referenceYearAndMonth = `${value?.data.reference.referenceMonth} ${value?.data.reference.referenceYear}`;

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const monthlyContractOverdue =
    value?.data?.dataCharts?.monthlyContractOverdue?.series[0];
  const totalPaid = value?.data?.dataCharts?.totalPaid?.series[0];
  const totalSold = value?.data?.dataCharts?.totalSold?.series[0];

  const convertedValues = monthlyContractOverdue?.map((n, index) => {
    return [months[index], n, totalSold[index], totalPaid[index]];
  });

  const data = convertedValues?.map(x => {
    return {
      name: x[0],
      Atrasados: x[1],
      Vendidos: x[2],
      Pago: x[3],
    };
  });

  return (
    <Container>
      <h2>{referenceYearAndMonth}</h2>
      <Grid>
        <ResponsiveContainer width="100%" height={800}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Atrasados" fill="#447915" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={800}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Vendidos" fill="#1D3304" />
            <Bar dataKey="Pago" fill="#447915" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Container>
  );
};

export default Chart;
