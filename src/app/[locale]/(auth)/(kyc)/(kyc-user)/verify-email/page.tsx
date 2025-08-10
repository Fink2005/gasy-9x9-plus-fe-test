import OTPForm from '@/components/KYC/OTPForm';

type Props = {
  searchParams: Promise<{ name?: string | undefined }>;
};

const page = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;
  const email = resolvedSearchParams.name || '';
  return <OTPForm email={email} />;
};

export default page;
