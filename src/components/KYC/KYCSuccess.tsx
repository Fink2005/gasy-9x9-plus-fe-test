import GoodSign from '@/libs/shared/icons/GoodSign';
import Link from 'next/link';

const KYCSuccess = () => {
  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.10)', boxShadow: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)', borderRadius: '0.75rem', padding: '1.25rem 1rem 1rem 1rem', gap: '1.5rem' }} className="text-[#BAE7FF] flex flex-col items-center justify-center max-w-[23rem] w-full">
      <GoodSign />
      <h2 className="text-[1.125rem] font-[700]">KYC thành công</h2>
      <p className="text-[0.875rem] font-[400] text-center ">
        Nhấn
        {' '}
        <span className="font-[700]">“Tiếp theo”</span>
        {' '}
        để để bắt đầu hành trình
        {' '}
        <br />
        {' '}
        gieo hạt của bạn.
        {' '}
      </p>
      <Link href="/" className="button-base max-w-[19.4375rem] w-full text-[#FFF] font-[590] text-[1rem]">
        Tiếp theo
      </Link>
    </div>
  );
};

export default KYCSuccess;
