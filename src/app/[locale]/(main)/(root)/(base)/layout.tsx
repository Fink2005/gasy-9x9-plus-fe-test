import { Footer } from '@/components/header-footer/Footer';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="min-h-screen overflow-y-auto">
      {props.children}
      <Footer />
    </main>
  );
}
