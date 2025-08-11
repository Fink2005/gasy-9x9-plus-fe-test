/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import useGetCookie from '@/hooks/useGetCookie';
import { isClient } from '@/libs/utils';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import web3, { Web3 } from 'web3';

// const contractAddress = '0x670Ec3544786843b9B207cC274968e2B58489fF1'; sepolia
import { handleRevalidateTag } from '@/app/actions/revalidation';
import { ApiException } from '@/app/http/apiRequest';
import { boxRequest } from '@/app/http/requests/box';
import BoxDistributor from '@/contracts/BoxDistributor.json';

const contractAddress = '0x3A87e9E8616957eA2F4b8960CFa333fCF5887589';
// const USDT_CONTRACT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const USDT_CONTRACT_ADDRESS = '0xc45D0156553e000eBcdFc05B08Ea5184911e13De'; // Sepolia testnet USDT

const API_KEY = 'R77H27MWUSI5JAWSX7GAZ69QXFNP763KCN';

const TRANSACTION_CHECKING_ROUTE = ['/', '/gold-mining', '/numerology', '/mission', '/ranking', '/box', '/profile'];

const TransactionHash = () => {
  const { handleGetCookie } = useGetCookie();

  const getAddress = async () => {
    const authData = await handleGetCookie('authData');
    const userAddress = (authData as { address: string })?.address;
    return { userAddress };
  };
  const router = useRouter();
  const pathname = usePathname();
  async function getAllowanceEtherscan(owner: string, spender: string) {
    const methodId = '0xdd62ed3e'; // allowance(address,address)

    const ownerPadded = owner.replace('0x', '').toLowerCase().padStart(64, '0');
    const spenderPadded = spender.replace('0x', '').toLowerCase().padStart(64, '0');

    const data = methodId + ownerPadded + spenderPadded;
    // ✅ Correct - this is Sepolia testnet
    const url = `https://api-sepolia.etherscan.io/api?module=proxy&action=eth_call&to=${USDT_CONTRACT_ADDRESS}&data=${data}&tag=latest&apikey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const json = await res.json();

      if (!json.result || json.result === '0x' || json.result === '0x0') {
        return 0; // not approved yet
      }

      const rawAllowance = Number.parseInt(json.result, 16); // hex → number
      return rawAllowance / 1e6; // USDT has 6 decimals
    } catch (err) {
      console.error('Fetch allowance error:', err);
      return 0;
    }
  }
  const MethodId = (type: 'openBox' | 'approve') => {
    // Your openBox function signature from the ABI
    const functionSignature = 'openBox(address[],uint256[],bytes)';
    const methodId = web3.utils.keccak256(functionSignature).slice(0, 10);
    return type === 'openBox' ? methodId : '0x095ea7b3';
  };

  const getLatestOpenBoxTransaction = async (address: string) => {
    const baseURL = 'https://api-sepolia.etherscan.io/api';
    const openBoxMethodId = MethodId('openBox');

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
  const getLatestApproveTransaction = async (address: string) => {
    const baseURL = 'https://api-sepolia.etherscan.io/api';
    const approveMethodId = MethodId('approve');

    try {
      const response = await fetch(
        `${baseURL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${API_KEY}`
      );

      const data = await response.json();
      if (data.status === '1') {
        // Find the first transaction that matches openBox method
        const { hash } = data.result.find((item: { methodId: string; hash: string }) => item.methodId === approveMethodId);
        return hash;
      } else {
        console.error(data.message || 'Failed to fetch transactions');
        return null; // Explicitly return null in case of failure
      }
    } catch (error) {
      console.error('Error fetching latest openBox transaction:', error);
      return null; // Explicitly return null in case of an error
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    (async () => {
      if (isClient && localStorage.getItem('boxData') && TRANSACTION_CHECKING_ROUTE.includes(pathname)) {
        const { userAddress: address } = await getAddress();
        const web3 = new Web3(window.ethereum); // or your provider
        const contract = new web3.eth.Contract(BoxDistributor, contractAddress);

        const boxData = localStorage.getItem('boxData') ? JSON.parse(localStorage.getItem('boxData')!) : null;
        const isApproving = await getAllowanceEtherscan(address, contractAddress);
        try {
          const handleRefreshOpenBox = async () => {
            const onChainCurrentBox = Number((await contract.methods.boxesOpened!(address).call()));
            if (onChainCurrentBox === boxData.currentBox) {
              try {
                const openBoxHash = await getLatestOpenBoxTransaction(address);
                if (!openBoxHash) {
                  return;
                }
                boxRequest.boxOpen(openBoxHash.transactionHash);
                clearInterval(intervalId as unknown as number);
                await handleRevalidateTag('get-me');
                router.refresh();
                localStorage.removeItem('boxData');
              } catch (error) {
                if (error instanceof ApiException) {
                  if (error.status === 400) {
                    handleRefreshOpenBox();
                  } else {
                    clearInterval(intervalId as unknown as number);
                  }
                }
              }
            }
          };
          intervalId = setInterval(handleRefreshOpenBox, 2000);
          if (isApproving) {
            const approveHash = await getLatestApproveTransaction(address);
            localStorage.setItem('boxData', JSON.stringify({
              ...boxData,
              txHash: approveHash,
            }));
          }
        } catch (error) {
          console.error(error);
        }
      }
    })();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [pathname]);
  return undefined;
};

export default TransactionHash;
