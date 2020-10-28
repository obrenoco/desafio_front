import React from 'react';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { Container } from './styles';

const Chart: React.FC = () => {
  const data = [
    [5, 'R$ 590', 'R$ 350', '1.Janeiro'],
    [6, 'R$ 664', 'R$ 250', '1.Janeiro'],
    [7, 'R$ 590', 'R$ 870', '2.Fevereiro'],
    [8, 'R$ 560', 'R$ 540', '3.Março'],
    [9, 'R$ 587', 'R$ 250', '4.Abril'],
  ];

  const columns = [
    {
      name: 'Contratos atrasados',
      options: {
        filter: false,
      },
    },
    {
      name: 'Total à receber',
      options: {
        filter: false,
      },
    },
    {
      name: 'Total vendido',
      options: {
        filter: false,
      },
    },
    {
      name: 'Mês',
      options: {
        filter: true,
        filterOptions: {
          names: [
            '1.Janeiro',
            '2.Fevereiro',
            '3.Março',
            '4.Abril',
            '5.Maio',
            '6.Junho',
            '7.Julho',
            '8.Agosto',
            '9.Setembro',
            '10.Outubro',
            '11.Novembro',
            '12.Dezembro',
          ],
        },
      },
    },
  ];

  const options = {
    filterType: 'multiselect' as any,
    selectableRowsHideCheckboxes: 'boolean' as any,
    selectableRows: 'none' as any,
    fixedHeader: true,
  };

  const theme = createMuiTheme({
    palette: { type: 'light' },
  });

  return (
    <Container>
      <MuiThemeProvider theme={theme}>
        <MUIDataTable
          title={'Dezembro 2020'}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </Container>
  );
};

export default Chart;
