import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WelcomeFooter = () => {
  return (
    <>
      <Link href="/introduction">
        <Button className="button-rounded py-[1rem]"><span className="text-wrap">BẮT ĐẦU HÀNH TRÌNH CỦA BẠN NGAY</span></Button>
      </Link>
    </>
  );
};

export default WelcomeFooter;
