import Image from 'next/image';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <main className="bg-9x9 min-h-screen overflow-y-auto px-4 pb-3 pt-6 flex flex-col items-center ">
      <Image width="500" height="500" className="w-[6rem] h-[4rem] aspect-[5/3] translate-y-3" alt="logo" src="/assets/logo-9x9.png" />
      {props.children}
    </main>
  );
}
