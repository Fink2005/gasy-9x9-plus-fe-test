import userRequests from '@/app/http/requests/user';
import { useQuery } from '@tanstack/react-query';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['get-me'],
    queryFn: async () => {
      const response = await userRequests.userGetMe();
      return response;
    },
    retry: 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
