import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import api from 'services/MockedApi';

import formatDataCharts from 'utils/formatedDataCharts';
import { Container } from './styles';

interface ValuesProps {
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
  const [value, setValues] = useState<ValuesProps>();

  useEffect(() => {
    api.get('').then(response => {
      setValues(response.data);
    });
  }, []);

  const months = [
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
  ];

  const monthlyContractOverdue =
    value?.data.dataCharts.monthlyContractOverdue.series[0];
  const totalPaid = value?.data.dataCharts.totalPaid.series[0];
  const totalSold = value?.data.dataCharts.totalSold.series[0];

  const formattedTotalPaid = totalPaid?.map(formatDataCharts);
  const formattedTotalSold = totalSold?.map(formatDataCharts);

  console.log(monthlyContractOverdue);
  console.log(formattedTotalPaid);
  console.log(formattedTotalSold);
  console.log(months);

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
          names: months,
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
          title={`${value?.data.reference.referenceMonth} ${value?.data.reference.referenceYear}`}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </Container>
  );
};

export default Chart;
