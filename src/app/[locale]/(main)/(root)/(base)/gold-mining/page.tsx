import { getCookie } from '@/app/actions/cookie';
import userRequests from '@/app/http/requests/user';
import GoldMining from '@/components/gold-mining/GoldMining';
import Image from 'next/image';

const page = async () => {
  const authData = await getCookie('authData');
  const address = authData ? JSON.parse(authData)?.address : undefined;
  const userRes = await userRequests.userGetMe();
  if (!userRes) {
    return;
  }
  return (
    <div className="pt-10 bg-gold-mining min-h-screen flex flex-col items-center">
      <div className="z-0">
        <Image width={500} height={500} className="w-[250px] h-[160px]" alt="logo 9x9" src="/assets/logo-9x9.png" />
        <Image width={500} height={500} quality={100} className="w-[12.125rem] h-[10.9136rem] absolute inset-1/2 -translate-x-1/2 -translate-y-1/3 animateLand" alt="Mining robot" src="/assets/mining-robot.webp" />
      </div>
      <GoldMining address={address} userRes={userRes} />
    </div>
  );
};

export default page;
