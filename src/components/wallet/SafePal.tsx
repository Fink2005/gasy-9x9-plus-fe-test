'use client';
import { Button } from '@/components/ui/button';
import useSafePalWallet from '@/hooks/useSafePalWallet';
import SafePalIcon from '@/libs/shared/icons/SafePal';
import { Loader2 } from 'lucide-react';

export default function SafePal({ invitedBy }: { invitedBy: string | null }) {
  const { safePalMethods, isConnecting } = useSafePalWallet();
  return (
    <main className="flex-1">
      <Button
        className="button-login mt-[0.5rem] w-full"

        onClick={
          async () => await safePalMethods.onConnectWallet(invitedBy)

        }
        disabled={isConnecting}
      >
        {isConnecting ? <Loader2 className="animate-spin" /> : (
          <>
            <span>
              Kết nối ví
            </span>
            <SafePalIcon className="ml-2 size-20" />
          </>
        )}
      </Button>
    </main>
  );
}
