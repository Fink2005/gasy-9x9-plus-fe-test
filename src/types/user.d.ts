export type User = {
  address: string;
  history: string[];
  isKyc: boolean;
  score: string;
  updatedAt: string | null;
  _id: string;
};

export type UserRanking = {
  users: {
    _id: string;
    address: string;
    myRanking?: number | string;
    score: string;
  }[];
  pagination: {
    page: number;
    pageTotal: number;
    limit: number;
    totalItems: number;
  };
};

export type UserScore = {
  users: {
    address: string;
    score: string;
    email: string;
  };
};

type BoxHistoryItems = {
  boxNumber: number;
  open: boolean;
  time: Date;
  title: string;
  description: {
    content: string;
    title: string;
  };

};

export type UserGetMe = {
  _id: string;
  badges: string[];
  rank: number;
  address: string;
  continiousPlayDay: number;
  mainNumber: number;
  invitedBy: string;
  inviterChain: string[];
  isKyc: boolean;
  score: number;
  restTimes: number;
  lastUpdatedTime: number;
  amount: number;
  openBoxHistories: BoxHistoryItems[];
  createdAt: string;
  updatedAt: string | null;
  currentBox: number;
  _destroy: boolean;
  email: string;
  openedBox: number;
};
