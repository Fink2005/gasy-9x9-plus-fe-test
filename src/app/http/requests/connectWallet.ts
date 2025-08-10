import { http } from '@/app/http/apiRequest';

const connectWalletRequest = {
  async getNonce(value: string): Promise<{ nonce: string } | null> {
    return await http.get<{ nonce: string } | null>(`/auth/nonce/${value}`);
  }
};
export default connectWalletRequest;
