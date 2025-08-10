/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    title: 'Đào đủ 9 lượt/ngày',
    describe: 'Hoàn thành 9 vòng đào vàng mỗi ngày - 9/9',
    score: '+99'
  },
  // {
  //   title: 'Kiên trì 3 ngày liên tiếp',
  //   describe: 'Tham gia liên tục 3 ngày để gieo hạt thói quen - 3/3',
  //   score: '+99'
  // },
  // {
  //   title: 'Xây thói quen 21 ngày',
  //   describe: 'Duy trì hành trình trọn vẹn 21 ngày - 3/21',
  //   score: '+999'
  // },
  // {
  //   title: 'Bền bỉ 30 ngày',
  //   describe: 'Hoàn thành hành trình 30 ngày liên tục - 3/30',
  //   score: '+999'
  // },
  {
    title: 'Kết nối bạn mới',
    describe: (
      <p>
        Mời thêm bạn bè tham gia
        {' '}
        <strong>
          9x9Plus
        </strong>
        {' '}
        (Với mỗi 1 người bạn mời bạn sẽ nhận được 999 điểm thịnh vượng)
      </p>

    ),

    score: '+999'
  },
  {
    title: 'Lan tỏa giá trị',
    describe: 'Like & chia sẻ video trên mạng xã hội',
    score: '+999'
  },
  {
    title: 'Tham gia group cộng đồng',
    describe: 'Gia nhập cộng đồng chính thức 9x9Plus',
    score: '+999'
  },
  {
    title: 'Tìm hiểu về 9x9Plus',
    describe: (
      <p>
        Đọc và hiểu rõ về dự án
        <strong>
          9x9Plus
        </strong>
        {' '}
        để mở khóa hành trình nhanh hơn
      </p>
    ),
    type: 'info',
    score: '+999'
  },
];

const Page = () => {
  return (
    <div className="bg-9x9 min-h-screen flex flex-col items-center text-center p-4 text-white">
      <h1 className="font-light text-xl text-blue-200 mb-2">9x9Plus</h1>
      <h2 className="font-semibold text-base mb-6 drop-shadow-lg">Nhiệm vụ</h2>

      <div className="w-full max-w-md h-[calc(100vh-180px)] overflow-y-auto">
        {data.map((item, index) => (
          <Link href={item.type === 'info' ? '/mission/info' : '#'} className="bg-white/10 backdrop-blur-sm my-4 rounded-lg p-4 flex items-center gap-3 border border-white/20" key={index}>
            <Image
              style={{
                backgroundImage: 'radial-gradient(267.72% 139.47% at 0% 2.78%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%)'
              }}
              src="/assets/logo-9x9.png"
              width={80}
              height={80}
              className="size-18 rounded-full"
              alt="logo"
            />

            <div className="flex-grow text-left">
              <p className="font-semibold text-base drop-shadow-sm mb-1">
                {item.title}
              </p>
              <div className="text-sm text-blue-100 drop-shadow-sm flex space-x-3">
                {item.describe}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <p className="text-shadow-custom font-medium drop-shadow-sm">
                {item.score}
              </p>
              <Image
                src="/assets/badge-medal.png"
                alt="Badge Medal"
                width={24}
                height={24}
                className="inline-block"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
