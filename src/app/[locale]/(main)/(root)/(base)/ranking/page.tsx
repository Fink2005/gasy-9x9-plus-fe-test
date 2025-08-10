import RankingList from '@/components/ranking/RankingList';

const page = () => {
  return (
    <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10">
      <h2 className="text-[#BAE7FF] text-shadow-custom text-[1.25rem] font-[274]">Bảng xếp hạng</h2>
      <h1 className="text-[#BAE7FF] text-shadow-custom text-[1.25rem] font-[590]">Điểm hạt thịnh vượng</h1>
      <RankingList />
    </div>
  );
};

export default page;
