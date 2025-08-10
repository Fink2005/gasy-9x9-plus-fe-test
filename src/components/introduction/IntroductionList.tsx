import { montserrat } from '@/app/fonts/montserrat';
import IntroductionFooter from '@/components/introduction/IntroductionFooter';
import GamePadIcon from '@/libs/shared/icons/GamePad';
import GraphUpIcon from '@/libs/shared/icons/GraphUp';
import HammerIcon from '@/libs/shared/icons/Hammer';
import HeartLockIcon from '@/libs/shared/icons/HeartLock';
import RocketIcon from '@/libs/shared/icons/Rocket';

const dataIntro = [
  {
    icon: RocketIcon,
    title: 'TẦM NHÌN',
    des: (
      <p>
        Mỗi con người đều mang trong mình một kho báu tiềm ẩn.
        {' '}
        <strong className="text-[#BAE7FF] font-[700]">9x9Plus</strong>
        {' '}
        ra đời để cùng bạn khám phá, nuôi dưỡng và lan tỏa những giá trị đó – kiến tạo một cộng đồng nơi ai cũng được tỏa sáng bằng trí tuệ, yêu thương và sự kết nối.
      </p>
    ),
  },
  {
    icon: HeartLockIcon,
    title: 'SỨ MỆNH',
    des: (
      <ul className="list-inside space-y-1">
        <li>
          Xây dựng một không gian an toàn – nhân văn – truyền cảm hứng.
        </li>
        <li>
          Giúp bạn hiểu chính mình, mở khóa năng lực và khát vọng.
        </li>
        <li>
          Đồng hành trong hành trình: học hỏi – hành động – chia sẻ – cộng hưởng.
        </li>
      </ul>
    ),
  },
  {
    icon: GraphUpIcon,
    title: 'GIÁ TRỊ CỐT LÕI',
    des: (
      <>
        <p>
          <strong>An tâm</strong>
          : Minh bạch - Rõ ràng - Đồng hành cùng nhau, không ai bị bỏ lại.
        </p>
        <p>
          <strong>Lan tỏa</strong>
          : Kết nối - Chia sẻ - Cộng hưởng giá trị.
        </p>
        <p>
          <strong>Bền vững</strong>
          : Vận hành tự chủ, minh bạch, ứng dụng công nghệ Web3 vì mục tiêu cộng đồng.
        </p>
      </>
    ),
  },
  {
    icon: GamePadIcon,
    title: 'CÁCH THỨC THAM GIA',
    des: (
      <>
        <ol className="list-inside space-y-1">
          <li>
            Đọc và đồng thuận với Nguyên tắc đồng hành.
          </li>
          <li>
            Bắt đầu thử thách Kho báu bên trong bạn để mở từng hộp thông điệp.
          </li>
          <li>
            Thực hành những hành động nhỏ mỗi ngày:
            <ul className="list-inside space-y-1">
              <li>Viết lời biết ơn</li>
              <li>Ghi nhận một thành công</li>
              <li>Chia sẻ một giá trị</li>
            </ul>
          </li>
          <li>
            Kết nối và đồng hành cùng cộng đồng
            <strong>
              9x9Plus
            </strong>
            .
          </li>
        </ol>
      </>
    ),
  },
  {
    icon: HammerIcon,
    title: 'LUẬT CHƠI',
    des: (
      <>
        <ul className="list-inside space-y-1">
          <li className="text-nowrap">Tôn trọng – Chia sẻ – Minh bạch là ba giá trị cốt lõi.</li>
          <li>
            Không ai bị bỏ lại phía sau: thành công của bạn cũng là niềm vui của cộng đồng.
          </li>
          <li>Đây không phải cuộc đua, mà là hành trình trưởng thành cùng nhau.</li>
        </ul>
      </>
    ),
  }
];

const IntroductionList = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {dataIntro.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="introduction-list-items">
            <div>
              <Icon className="-translate-y-2 size-14" />
            </div>
            <div>
              <h3 className={`${montserrat.variable} introduction-title-items mb-1`}>{item.title}</h3>
              <div className="introduction-des-items pe-3 text-wrap">
                {item.des}
              </div>
            </div>
          </div>
        );
      })}
      <IntroductionFooter />
    </div>
  );
};

export default IntroductionList;
