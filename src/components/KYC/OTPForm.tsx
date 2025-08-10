'use client';
import { createCookie } from '@/app/actions/cookie';
import userRequests from '@/app/http/requests/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTimeInterval from '@/hooks/useTimeInterval';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { toast } from 'sonner';

type Props = {
  email: string;
};

const OTPForm = ({ email }: Props) => {
  const [otp, setOtp] = useState<string[]>(Array.from({ length: 6 }).fill('') as string[]);
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleTimeInterval, isCounting, timeLeft } = useTimeInterval();
  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');

    // Remove any non-digit characters and limit to 6 digits
    const digits = pastedData.replace(/\D/g, '').slice(0, 6);

    if (digits.length > 0) {
      const newOtp = [...otp];

      // Fill the OTP array with pasted digits
      for (let i = 0; i < 6; i++) {
        newOtp[i] = digits[i] || '';
      }

      setOtp(newOtp);

      // Focus on the next empty input or the last input if all are filled
      const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();

      // Show success message if we got exactly 6 digits
      if (digits.length === 6) {
        toast.success('Mã OTP đã được dán thành công!');
      }
    }
  };

  const handleResend = async () => {
    await userRequests.resendOtp();
    toast.success('Mã OTP đã được gửi lại. Vui lòng kiểm tra email của bạn.');
    handleTimeInterval(60, true);
  };

  const handleSubmit = async () => {
    const countFormated = otp.join('');
    if (otp.includes('')) {
      toast.warning('Vui lòng nhập đầy đủ mã OTP.');
      return;
    }

    setIsLoading(true);
    try {
      const responseKyc = await userRequests.verifyKyc({ kycOtp: countFormated });

      await Promise.all([
        createCookie({
          name: 'authData',
          value: JSON.stringify(
            responseKyc?.user,
          ),
        }),
        createCookie({
          name: 'accessToken9x9',
          value: responseKyc?.accessToken,
        })
      ]);
      router.push('/verified');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Xác nhận không thành công. Vui lòng thử lại sau.');
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <p
        className="text-[0.875rem] text-center font-[274] text-[#FAFAFA] mt-4"
        style={{ textShadow: '0px 4px 15px rgba(145, 213, 255, 0.50)' }}
      >
        Mã xác nhận đã được gửi đến email
      </p>
      <p className="text-[#BAE7FF] text-[0.875rem] font-[590] text-center">
        {decodeURIComponent(email ?? '')}
      </p>
      <div className="flex gap-3 my-5 justify-center">
        {otp.map((digit, index) => (
          <Input
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="number"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleInputChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-[3.1563rem] h-[4rem] text-center text-2xl font-bold bg-white text-black rounded-2xl"
          />
        ))}

      </div>
      <div className="space-x-1">
        <span className="text-[#FFF] text-[0.875rem] font-[274]" style={{ textShadow: '0px 4px 15px rgba(145, 213, 255, 0.50)' }}>Chưa có mã xác nhận?</span>
        {isCounting ? (
          <span className="text-[0.875rem] text-[#BAE7FF] font-[590]">
            {timeLeft}
            s
          </span>
        ) : (
          <button
            type="button"
            className="text-[0.875rem] text-[#BAE7FF] font-[590] underline decoration-solid decoration-skip-ink-0 cursor-pointer bg-transparent border-none p-0"
            onClick={handleResend}
          >
            Gửi lại
          </button>
        )}
      </div>
      <div>
        <Button className="button-base w-[21.4375rem] mt-3" onClick={handleSubmit}>
          {' '}
          { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {' '}
          Xác nhận
        </Button>
      </div>
    </div>
  );
};

export default OTPForm;
