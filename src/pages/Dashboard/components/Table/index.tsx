import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import api from 'services/MockedApi';

import formatDataTable from 'utils/formatedDataTable';
import { DataProps } from 'interfaces';
import { Container } from './styles';

const Table: React.FC = () => {
  const [value, setValues] = useState<DataProps>(() => {
    const storagedValues = localStorage.getItem('@SiteBlindado:values');

    if (storagedValues) {
      return JSON.parse(storagedValues);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@SiteBlindado:values', JSON.stringify(value));
  }, [value]);

  useEffect(() => {
    api.get('').then(response => {
      setValues(response.data);
    });
  }, []);

  const months = [
    '01.Janeiro',
    '02.Fevereiro',
    '03.Março',
    '04.Abril',
    '05.Maio',
    '06.Junho',
    '07.Julho',
    '08.Agosto',
    '09.Setembro',
    '10.Outubro',
    '11.Novembro',
    '12.Dezembro',
  ];

  const monthlyContractOverdue =
    value?.data?.dataCharts?.monthlyContractOverdue?.series[0];
  const totalPaid = value?.data?.dataCharts?.totalPaid?.series[0];
  const totalSold = value?.data?.dataCharts.totalSold.series[0];

  const formattedTotalPaid = totalPaid?.map(formatDataTable);
  const formattedTotalSold = totalSold?.map(formatDataTable);

  const data = monthlyContractOverdue?.map((n, index) => {
    return [
      n,
      formattedTotalPaid[index],
      formattedTotalSold[index],
      months[index],
    ];
  });

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

export default Table;
