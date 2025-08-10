export type BoxRes = {
  signature: string;
  addresses: string[];
  amounts: number[];
};

export type BoxDetailRes = {
  title: string;
  invitedCount: number;
  content: string;
  openTime: string;
  boxNumber: number;
  invitedBy: string;
  directedAmount: number;
  distributedAmount: number;
  referralChainAmount: number;
  receivedTotal: number;
};

export type User = {
  _id: string;
  address: string;
};
export type BoxTreeRes = {
  result: {
    users: User[];
    pagination: {
      totalItems: number;
      limit: number;
      page: number;
      pageTotal: number;
    };
  };
};

export type BoxTreeBody = {
  address: string;
  page: number;
};
