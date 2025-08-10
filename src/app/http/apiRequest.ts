/* eslint-disable no-console */
import { deleteCookie, getCookie } from '@/app/actions/cookie';
import { isClient } from '@/libs/utils';
import { redirect } from 'next/navigation';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiRequestConfig = {
  method: HttpMethod;
  headers: Record<string, string>;
  body?: string | FormData | undefined;
  credentials?: RequestCredentials;
};
type CustomOptions = Omit<RequestInit, 'method'> & {
  nextServer?: string | undefined;
};

export class ApiException extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiException';
    this.status = status;
  }
}

const baseURLBe = typeof window === 'undefined'
  ? process.env.API_BASE_SERVER // server-side
  : process.env.NEXT_PUBLIC_API_BASE_CLIENT; // client-side

const apiRequest = async <T>(
  endpoint: string,
  method: HttpMethod,
  options?: CustomOptions | undefined
): Promise<T | null> => {
  try {
    let body: FormData | string | undefined;
    if (options?.body instanceof FormData) {
      body = options.body;
    } else if (options?.body) {
      body = JSON.stringify(options.body);
    }// Nếu không truyền baseUrl (hoặc baseUrl = undefined) thì lấy từ envConfig.NEXT_PUBLIC_API_ENDPOINT
    // Nếu truyền baseUrl thì lấy giá trị truyền vào, truyền vào '' thì đồng nghĩa với việc chúng ta gọi API đến Next.js Server

    const baseUrl
    = options?.nextServer === undefined
      ? baseURLBe
      : options.nextServer;

    const baseHeaders: {
      [key: string]: string;
    }
    = body instanceof FormData
      ? {}
      : {
          'Content-Type': 'application/json'
        };
    const accessToken = await getCookie('accessToken9x9');
    if (accessToken) {
      baseHeaders.Authorization = `Bearer ${accessToken}`;
    }
    const config: ApiRequestConfig = {
      method,
      body,
      headers: {
        ...baseHeaders,
        ...options?.headers
      } as any,
      credentials: 'include',
    };
    const response = await fetch(`${baseUrl}${endpoint}`, config);

    if (!response.ok) {
      if (response.status === 401) {
        if (isClient) {
          const res = await fetch(`${baseURLBe}/auth/logout`, { method: 'POST', credentials: 'include', headers: {
            'Content-Type': 'application/json',
          }, },);
          if (!res.ok) {
            await Promise.allSettled([
              deleteCookie('accessToken9x9'),
              deleteCookie('refreshToken9x9'),
              deleteCookie('authData')
            ]);
            redirect('/login');
          }
        } else {
          console.log('redirect logout');
        }
      } else if (response.status === 400 || response.status === 403) {
        try {
          const errorBody = await response.json();
          const message = errorBody.message || `Error ${response.status}`;
          throw new ApiException(message, response.status);
        } catch (error) {
          if (error instanceof ApiException) {
            throw error; // Re-throw known ApiException
          }
          console.log(`Error ${response.status}`, response.status);
        }
      } else {
        console.log(`Request failed with status ${response.status}`, response.status);
      }
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return (await response.json()) as T;
    }

    // Handle non-JSON responses
    return null;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const http = {
  get: <T>(endpoint: string, options?: Omit<CustomOptions, 'body'> | undefined) => apiRequest<T>(
    endpoint,
    'GET',
    options
  ),
  post: <T>(endpoint: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) => apiRequest<T>(
    endpoint,
    'POST',
    { ...options, body }
  ),
  patch: <T>(endpoint: string, body?: any, options?: Omit<CustomOptions, 'body'> | undefined) => apiRequest<T>(
    endpoint,
    'PATCH',
    { ...options, body }
  ),
  delete: <T>(endpoint: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) => apiRequest<T>(
    endpoint,
    'DELETE',
    { ...options, body }
  )
};

export default apiRequest;
