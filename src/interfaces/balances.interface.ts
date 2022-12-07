import { CURRENCY } from '../enums/currency.enum';

export interface IBalance {
  currency: CURRENCY;
  minorUnits: number;
}

export default interface IBalances {
  clearedBalance: IBalance;
  effectiveBalance: IBalance;
  pendingTransactions: IBalance;
  acceptedOverdraft: IBalance;
  amount: IBalance;
}
