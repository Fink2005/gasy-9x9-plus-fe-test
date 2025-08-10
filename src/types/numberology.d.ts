export type NumerologyResponse = {
  name: string;
  number: {
    body: number;
    destiny: number;
    lifePath: number;
    mainNumber: number;
    personality: number;
    soul: number;
  };
  meaning: {
    content: NumerologyItem;
    description: string;
  };
};

type NumerologyItem = {
  title: string;
  value: string;
}[];
