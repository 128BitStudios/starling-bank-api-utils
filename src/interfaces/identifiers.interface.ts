export interface IIdentifier {
  identifierType: string;
  bankIdentifier: string;
  accountIdentifier: string;
}

export default interface IIdentifiers {
  accountIdentifier: string;
  bankIdentifier: string;
  iban: string;
  bic: string;
  accountIdentifiers: [IIdentifier];
}
