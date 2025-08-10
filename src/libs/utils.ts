import authRequests from '@/app/http/requests/auth';
import type { TokenPayload } from '@/types/jwt';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { devtools } from 'zustand/middleware';
import { deleteCookie, getCookie } from '../app/actions/cookie';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const decodeToken = (token: string) => {
  return jwtDecode(token) as TokenPayload;
};

export const withDevTools = (fn: any) =>
  process.env.NEXT_PUBLIC_NOVEL_ENV !== 'prod' ? devtools(fn) : fn;

export function NumberFormat(number: number): string {
  const formatted = number.toLocaleString('de-DE');

  return formatted;
}

export const formatAddress = (address: string, end: number) => `${address?.slice(0, end)}...${address?.slice(-3)}`;

export const formatMsToCountdown = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const handleClipboardCopy = (data: string | number) => {
  navigator.clipboard.writeText(data.toString());
  toast.success('Đã sao chép địa chỉ ví');
};

export const isClient = typeof window !== 'undefined';
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
export const checkAndRefreshToken = async (param?: {
  onError?: () => void;
  onSuccess?: () => void;
  force?: boolean;
}) => {
  // Không nên đưa logic lấy access và refresh token ra khỏi cái function `checkAndRefreshToken`
  // Vì để mỗi lần mà checkAndRefreshToken() được gọi thì chúng ta se có một access và refresh token mới
  // Tránh hiện tượng bug nó lấy access và refresh token cũ ở lần đầu rồi gọi cho các lần tiếp theo
  const accessToken = await getCookie('accessToken9x9');
  const refreshToken = await getCookie('refreshToken9x9');
  // Chưa đăng nhập thì cũng không cho chạy
  if (!accessToken || !refreshToken) {
    return;
  }
  const decodedAccessToken = decodeToken(accessToken);
  const decodedRefreshToken = decodeToken(refreshToken);
  // Thời điểm hết hạn của token là tính theo epoch time (s)
  // Còn khi các bạn dùng cú pháp new Date().getTime() thì nó sẽ trả về epoch time (ms)
  const now = Math.round(new Date().getTime() / 1000);
  // trường hợp refresh token hết hạn thì cho logout
  if (decodedRefreshToken.exp <= now) {
    deleteCookie('refreshToken9x9');
    return param?.onError && param.onError();
  }
  // Ví dụ access token của chúng ta có thời gian hết hạn là 10s
  // thì mình sẽ kiểm tra còn 1/3 thời gian (3s) thì mình sẽ cho refresh token lại
  // Thời gian còn lại sẽ tính dựa trên công thức: decodedAccessToken.exp - now
  // Thời gian hết hạn của access token dựa trên công thức: decodedAccessToken.exp - decodedAccessToken.iat

  // console.log( decodedAccessToken.exp - now ,  (decodedAccessToken.exp - decodedAccessToken.iat) ,
  //   (decodedAccessToken.exp - decodedAccessToken.iat) );
  //   console.log(accessToken, 'access ne');
  if (
    param?.force
    || decodedAccessToken.exp - now
    < (decodedAccessToken.exp - decodedAccessToken.iat) / 3
  ) {
    // Gọi API refresh token
    try {
      const tokens = await authRequests.serverRefreshToken();

      if (!tokens) {
        return param?.onError && param.onError();
      }
      param?.onSuccess && param.onSuccess();
    } catch {
      param?.onError && param.onError();
    }
  }
};
