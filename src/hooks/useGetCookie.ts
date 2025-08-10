/* eslint-disable react-hooks-extra/no-unnecessary-use-prefix */
import { getCookie } from '@/app/actions/cookie';

const useGetCookie = <T>() => {
  const handleGetCookie = async (name: string): Promise<T | undefined> => {
    const data = await getCookie(name);
    if (data) {
      try {
        const dataCookieParsed: T = JSON.parse(data);
        return dataCookieParsed;
      } catch (error) {
        console.error(`Failed to parse cookie "${name}":`, error);
      }
    }
    return undefined;
  };

  return { handleGetCookie };
};

export default useGetCookie;
