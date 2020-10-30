import React from 'react';
import * as Recharts from 'recharts';

import { Container, Grid } from './styles';

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
  const data = [
    { name: 'Janeiro', Atrasados: 4, 'A Receber': 240, Vendidos: 240 },
    { name: 'Fevereiro', Atrasados: 3, 'A Receber': 198, Vendidos: 210 },
    { name: 'Março', Atrasados: 2, 'A Receber': 980, Vendidos: 220 },
    { name: 'Abril', Atrasados: 2, 'A Receber': 390, Vendidos: 200 },
    { name: 'Maio', Atrasados: 1, 'A Receber': 480, Vendidos: 218 },
    { name: 'Junho', Atrasados: 2, 'A Receber': 380, Vendidos: 250 },
    { name: 'Julho', Atrasados: 3, 'A Receber': 430, Vendidos: 210 },
    { name: 'Agosto', Atrasados: 2, 'A Receber': 308, Vendidos: 200 },
    { name: 'Setembro', Atrasados: 1, 'A Receber': 400, Vendidos: 281 },
    { name: 'Outubro', Atrasados: 2, 'A Receber': 380, Vendidos: 200 },
    { name: 'Novembro', Atrasados: 3, 'A Receber': 430, Vendidos: 200 },
    { name: 'Dezembro', Atrasados: 2, 'A Receber': 398, Vendidos: 200 },
  ];

  return (
    <Container>
      <h2>Dezembro 2020</h2>
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
            <Bar dataKey="A Receber" fill="#447915" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Container>
  );
};

export default Chart;
