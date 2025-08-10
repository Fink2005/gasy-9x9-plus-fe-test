export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen bg-login">{props.children}</main>
  );
}
