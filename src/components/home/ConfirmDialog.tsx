'use client';

import { boxRequest } from '@/app/http/requests/box';
import CoinIcon from '@/libs/shared/icons/Coin';
import GoodSign from '@/libs/shared/icons/GoodSign';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog';
// Minimal USDT ABI for approval
import { handleRevalidateTag } from '@/app/actions/revalidation';
import BoxDistributor from '@/contracts/BoxDistributor.json';
import { isClient } from '@/libs/utils';
import { Loader2 } from 'lucide-react';
import Web3 from 'web3';

const usdtAbi = [
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function'
  }
];

// Constants
const usdtAddress = '0xc45D0156553e000eBcdFc05B08Ea5184911e13De'; // this is for Sepolia testnet USDT
const contractAddress = '0x3A87e9E8616957eA2F4b8960CFa333fCF5887589';
// const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
// const contractAddress = '0x670Ec3544786843b9B207cC274968e2B58489fF1';
const approveAmount = 26 * 10 ** 6; // 26 USDT (6 decimals)

type Props = {
  boxNumber: number;
  currentBox: number;
  isOpenBox: boolean;
};

const ConfirmDialog = ({ boxNumber, isOpenBox, currentBox }: Props) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleOpenChange = (open: boolean) => {
    if ((!isOpenBox && boxNumber !== 1) && currentBox !== boxNumber) {
      toast.warning(`Bạn cần phải mở hộp ${currentBox}`);
      return;
    } else if (isOpenBox) {
      router.push(`/box/${boxNumber}`);
      return;
    }
    setIsOpen(open);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setIsConfirm(false);
    setLoading(false);
  };

  const handleConfirm = async () => {
    if (typeof window.ethereum === 'undefined') {
      toast.error('Vui lòng cài đặt ví');
      return;
    }

    if (isClient) {
      const boxData = localStorage.getItem('boxData') ? JSON.parse(localStorage.getItem('boxData')!) : null;

      localStorage.setItem('boxData', JSON.stringify({
        ...(boxData && boxData),
        isOpenedBox: true,
        currentBox
      }));
    }

    try {
      setLoading(true);
      setIsOpen(false);
      const web3 = new Web3(window.ethereum);

      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }], // 0xaa36a7 = Sepolia chain ID in hex
      });
      // await window.ethereum.request({
      //   method: 'wallet_switchEthereumChain',
      //   params: [{ chainId: '0x1' }], // 0x1 = Ethereum mainnet chain ID in hex
      // });

      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];

      const usdtContract = new web3.eth.Contract(usdtAbi as any, usdtAddress);

      if (usdtContract.methods.approve) {
        let hax;

        const txHashStored = JSON.parse(localStorage.getItem('boxData') || '')?.txHash;
        if (!txHashStored) {
          hax = await usdtContract.methods.approve(contractAddress, approveAmount).send({ from: sender });
        }

        const transactionHash = hax?.transactionHash || txHashStored;

        const res = await boxRequest.boxApprove(transactionHash, boxNumber);

        if (!res) {
          throw new Error('Box approval failed');
        }
        const { signature, addresses, amounts } = res;

        // Encode data cho openBox
        const parsed = JSON.parse(JSON.stringify(BoxDistributor));
        const contract = new web3.eth.Contract(parsed, contractAddress);

        const data = contract.methods.openBox!(
          addresses,
          amounts,
          signature
        ).encodeABI();

        const gasLimit = await web3.eth.estimateGas({
          to: contractAddress,
          data,
          from: sender
        });

        // Lấy gas price
        const gasPrice = await web3.eth.getGasPrice();
        // Tạo transaction object
        const txObject = {
          to: contractAddress,
          data,
          gas: gasLimit, // ✅ Use estimated gas limit
          gasPrice, // ✅ Use gas price separately
          from: sender
        };

        const accounts = await web3.eth.getAccounts();
        const fromAddress = accounts[0];

        const response = await web3.eth.sendTransaction({
          ...txObject,
          from: fromAddress
        });
        // alert(response.transactionHash);

        const receiptRes = await web3.eth.getTransactionReceipt(response.transactionHash);

        if (receiptRes.status) {
          await boxRequest.boxOpen(response.transactionHash as string);
          toast.success('Mở box thành công!');
        } else {
          toast.error('Giao dịch thất bại hoặc bị huỷ.');
        }
        handleRevalidateTag('get-me');
        router.refresh();
      } else {
        throw new Error('approve method is undefined on the contract');
      }

      setIsConfirm(true);
      localStorage.removeItem('boxData');
    } catch (err) {
      setIsOpen(false);
      console.error('Approve error:', err);
      toast.error('Giao dịch thất bại hoặc bị huỷ.');
      return;
    } finally {
      setLoading(false);
      setIsOpen(true);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className={`${(boxNumber === 1 || isOpenBox || currentBox === boxNumber) ? 'button-base' : 'button-base-disabled'} text-white !py-1 font-[700] text-[11px] text-nowrap w-20`}
      >
        {loading ? <Loader2 className="animate-spin size-4" /> : !isOpenBox ? 'Mở khóa' : 'Chi tiết'}
      </DialogTrigger>
      <DialogContent className="confirm-dialog gap-3">
        <DialogHeader>
          <DialogTitle className="text-shadow-custom text-[1.5rem] font-[700] mb-0">
            {!isConfirm && 'Xác nhận thanh toán'}
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {!isConfirm ? (
          <div className="-translate-y-3">
            <CoinIcon />
            <p className="text-shadow-custom text-[1.5rem] font-[860] text-center">26$ USDT</p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center -translate-y-3">
            <GoodSign />
            <p className="text-shadow-custom font-[700] text-[1.125rem]">Mở box thành công</p>
            <p className="text-shadow-custom text-[0.875rem] font-[400] text-center">
              Nhấn
              {' '}
              <span className="font-[700]">{`"Chi tiết box ${boxNumber}"`}</span>
              {' '}
              để bắt đầu hành trình gieo hạt của bạn
            </p>
          </div>
        )}

        <div className="space-x-3 px-3 flex w-full -translate-y-2">
          <Button
            variant="outline"
            className="bg-transparent text-white w-1/2"
            onClick={handleCancel}
          >
            Hủy bỏ
          </Button>
          <Button
            className="w-1/2 button-custom"
            onClick={() => {
              !isConfirm ? handleConfirm() : router.push(`box/${boxNumber}`);
            }}
            disabled={loading}
          >
            {loading ? 'Đang xử lý...' : isConfirm ? 'Chi tiết' : 'Xác nhận'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
