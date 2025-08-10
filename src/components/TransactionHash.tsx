/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { boxRequest } from '@/app/http/requests/box';
import useGetCookie from '@/hooks/useGetCookie';
import { isClient } from '@/libs/utils';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import web3 from 'web3';

const contractAddress = '0x670Ec3544786843b9B207cC274968e2B58489fF1';
// const address = '0xbccb4e1aeb3ac505783b9c744d4623ebd1467561';

const TransactionHash = () => {
  const { handleGetCookie } = useGetCookie();
  const MethodId = () => {
    // Your openBox function signature from the ABI
    const functionSignature = 'openBox(address[],uint256[],bytes)';
    const methodId = web3.utils.keccak256(functionSignature).slice(0, 10);
    return methodId;
  };

  const getLatestOpenBoxTransaction = async () => {
    const API_KEY = process.env.ETHERSCAN_API_KEY;
    const baseURL = 'https://api.etherscan.io/api';
    const openBoxMethodId = MethodId();
    const authData = await handleGetCookie('authData');
    const address = (authData as { address: string })?.address;

    try {
      const response = await fetch(
        `${baseURL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${API_KEY}`
      );

      const data = await response.json();

      if (data.status === '1') {
        // Find the first transaction that matches openBox method
        for (const tx of data.result) {
          // Filter by contract address if specified
          if (contractAddress && tx.to?.toLowerCase() !== contractAddress.toLowerCase()) {
            continue;
          }

          // Check if transaction calls openBox method
          if (tx.input && tx.input.startsWith(openBoxMethodId)) {
            return {
              transactionHash: tx.hash,
            };
          }
        }

        return null; // No openBox transaction found
      } else {
        console.error(data.message || 'Failed to fetch transactions');
        return null; // Explicitly return null in case of failure
      }
    } catch (error) {
      console.error('Error fetching latest openBox transaction:', error);
      return null; // Explicitly return null in case of an error
    }
  };

  const pathname = usePathname();
  useEffect(() => {
    (async () => {
      if (MethodId() && isClient && JSON.parse(localStorage.getItem('isOpenBox') || 'false') && pathname === '/box') {
        const tx = await getLatestOpenBoxTransaction();
        if (tx) {
          await boxRequest.boxOpen(tx?.transactionHash as string);
        }
      }
    })();
  }, [pathname]);
  return undefined;
};

export default TransactionHash;
