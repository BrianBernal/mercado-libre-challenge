interface IFetchPurchasesQueryParams {
  userId: string;
  limit?: number;
  page?: number;
}
interface IParsedQueryParams {
  userId: string;
  limit?: string;
  page?: string;
}

export type { IFetchPurchasesQueryParams, IParsedQueryParams };
