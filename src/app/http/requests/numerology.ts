import { http } from '@/app/http/apiRequest';
import type { NumerologyResponse } from '@/types/numberology';

export const numerologyRequest = {
  async getNumerology(name: string, birth: string): Promise<NumerologyResponse | null> {
    return await http.get<NumerologyResponse | null> (
      `/numerology/meanings?name=${name}&birth=${birth}`,
      {
        cache: 'force-cache'
      }
    );
  }
};
