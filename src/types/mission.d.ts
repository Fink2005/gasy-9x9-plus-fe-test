export type MissionRes = {
  data: {
    miningTimes: number;
    continuousLoginDay: number;
    shareLink: boolean;
    joinGroup: boolean;
    readTerms: boolean;
    claimByDay: number[];
  };
};
