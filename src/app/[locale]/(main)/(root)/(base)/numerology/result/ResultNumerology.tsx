import { numerologyRequest } from '@/app/http/requests/numerology';
import Meaning from '@/components/numerology/Meaning';
import Numerology from '@/components/numerology/Numerology';

const ResultNumerology = async ({ searchParams }: { searchParams: Promise<Record<'name' | 'birth' | 'meaning', string | undefined>> }) => {
  const params = await searchParams;
  if (!params.name || !params.birth) {
    return <div className="min-h-screen bg-numerology text-center flex items-center justify-center text-shadow-custom">Missing name or birth date parameters.</div>;
  }
  const name = params.name ?? '';
  const birth = params.birth ?? '';
  const meaning = params.meaning;
  const numerologyResult = await numerologyRequest.getNumerology(name, birth);

  const baseUrl = `/numerology/result?name=${encodeURIComponent(name)}&birth=${encodeURIComponent(birth)}`;

  if (meaning) {
    return (
      <Meaning baseUrl={baseUrl} numerologyResult={numerologyResult} />
    );
  }
  return (
    <div className="min-h-screen bg-numerology pt-10 relative overflow-x-hidden  ">
      <Numerology baseUrl={baseUrl} numerologyResult={numerologyResult?.number ?? null} />
    </div>
  );
};

export default ResultNumerology;
