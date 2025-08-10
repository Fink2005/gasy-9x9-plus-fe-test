import { http } from '@/app/http/apiRequest';
import type { LoginPayload, LoginResponse } from '@/types/auth';

const authRequests = {
  async login(body: LoginPayload): Promise<LoginResponse> {
    return await http.post<LoginResponse>('/auth/login', body);
  },
  async refreshToken(token: string): Promise<{ success: boolean } | null> {
    return await http.post<{ success: boolean } | null>('/auth/refresh-token', token);
  },
  async serverRefreshToken(): Promise<{ success: boolean } | null> {
    return await http.post<{ success: boolean } | null>('/api/server-refresh-token', null, {
      nextServer: ''
    });
  },
  async logout(): Promise<{ success: boolean } | null> {
    return await http.post<{ success: boolean } | null>('/auth/logout', {});
  }
};

export default authRequests;
