// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');

// eslint-disable-next-line
declare interface IntlMessages extends Messages {}

declare global {
  interface Window {
    safepalProvider?: {
      connect: () => Promise<void>;
      request: ({ method, params }: {
        method: string;
        params: string[];
      }) => Promise<string>;
      enable: () => Promise<string[]>;
      getAccount: () => Promise<{
        toString: () => string;
      }>;
    };
    ethereum?: {
      request: ({ method, params }: {
        method: string;
        params?: any[];
      }) => Promise<any>;
    };
  }
}

export { };
