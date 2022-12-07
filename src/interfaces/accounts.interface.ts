import { ACCOUNT_TYPE } from '../enums/account-type.enum';
import { CURRENCY } from '../enums/currency.enum';

export interface IAccount {
  accountUid: string;
  accountType: ACCOUNT_TYPE;
  defaultCategory: string;
  currency: CURRENCY;
  createdAt: Date;
  name: string;
}

export default interface IAccounts {
  accounts: [IAccount];
}
