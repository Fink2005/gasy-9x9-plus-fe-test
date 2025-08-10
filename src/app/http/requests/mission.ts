import { http } from '@/app/http/apiRequest';
import type { MissionRes } from '@/types/mission';

export const missionRequest = {
  async getTasks(): Promise<MissionRes | null> {
    return await http.get<MissionRes | null>('/task');
  }
};
