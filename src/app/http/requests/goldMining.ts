import { http } from '@/app/http/apiRequest';
import type { GoldMiningRestTimesResponse } from '@/types/game';
import type { UserScore } from '@/types/user';

export const goldMiningRequest = {
  async GoldMiningStart(): Promise<{ sessionId: string } | null> {
    return await http.get<{ sessionId: string } | null>('/mining/start');
  },
  async GoldMiningResult(sessionId: string, score: number): Promise<UserScore | null> {
    return await http.post<UserScore | null>('/mining/submit', {
      sessionId,
      score
    });
  },
  async GoldMiningMessage(number: number): Promise<{
    _id: string;
    number: number;
    content: string;
  } | null> {
    return await http.get<{
      _id: string;
      number: number;
      content: string;
    } | null>(`/mining/get-message/${number}`);
  },
  async GoldMiningRestTimes(): Promise<GoldMiningRestTimesResponse | null> {
    return await http.get<GoldMiningRestTimesResponse | null>('/mining/rest-times');
  }
};
