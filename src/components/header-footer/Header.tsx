import { getCookie } from '@/app/actions/cookie';
import DropdownWallet from '@/components/home/DropdownWallet';
import Image from 'next/image';

export async function Header() {
  const authData = await getCookie('authData');
  const address = authData ? JSON.parse(authData)?.address : undefined;
  return (
    <header className="header bg-white sticky top-0 left-0 right-0 z-50 w-full px-4 flex items-center">
      <Image width={200} height={200} className="w-[72px]" alt="logo" src="/assets/logo-9x9.png" />
      <DropdownWallet address={address} />
    </header>
  );
}
