import { COUNTRY } from '../enums/country.enum';
import { DIRECTION } from '../enums/direction.enum';
import { CURRENCY } from '../enums/currency.enum';

export interface IInsightsBreakdown {
  countryCode: COUNTRY;
  totalSpent: number;
  totalReceived: number;
  netSpend: number;
  netDirection: DIRECTION;
  currency: CURRENCY;
  percentage: number;
  transactionCount: number;
}

export default interface IInsights {
  period: string;
  totalSpent: number;
  totalReceived: number;
  netSpend: number;
  totalSpendNetOut: number;
  totalReceivedNetIn: number;
  currency: CURRENCY;
  direction: DIRECTION;
  breakdown: [IInsightsBreakdown];
}
