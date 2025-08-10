import KYCHeader from '@/components/header-footer/KYCHeader';
import KYCTemplate from '@/templates/KYCTemplate';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <KYCTemplate>
      <KYCHeader />
      <main
        style={{
          height: 'calc(100vh - 80px)', // Adjust height to fit the header
        }}
      >
        {props.children}
      </main>
    </KYCTemplate>
  );
}
