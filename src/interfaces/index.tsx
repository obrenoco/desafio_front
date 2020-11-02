export interface DataProps {
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

export interface IUser {
  name: string;
  password: string;
  token: string;
}
