import KYCTemplate from '@/templates/KYCTemplate';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <KYCTemplate>
      <main
        className="bg-9x9 min-h-screen flex items-center justify-center"
      >
        {props.children}
      </main>
    </KYCTemplate>
  );
}
