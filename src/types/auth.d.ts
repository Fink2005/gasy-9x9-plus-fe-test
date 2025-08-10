import type { User } from '@/types/user';

export type LoginPayload = { address: string; signature: string; message: string; invitedBy?: string | undefined };

export type LoginResponse = {
  user: User;
  accessToken: string;
} | null;

export type VerifyKycResponse = {
  user: User;
  accessToken: string;
};

export type refreshTokenResponse = {
  accessToken: string;
};
