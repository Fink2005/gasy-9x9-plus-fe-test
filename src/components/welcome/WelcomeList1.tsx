import ArrowIcon from '@/libs/shared/icons/Arrow';

const WelcomeList1 = () => {
  return (
    <div>
      <span>
        🎉 Chào mừng bạn trở lại với
        {' '}
        <strong>9x9Plus</strong>
        !
      </span>
      <p className="text-[0.6875rem] font-[500] !shadow-none">
        Mỗi người chúng ta đều mang trong mình một kho báu tiềm ẩn – trí tuệ, tình yêu thương, giá trị sống và những khả năng chưa từng được khai phá. Hành trình này chính là chiếc chìa khóa để bạn mở dần từng lớp, khám phá bản thân và lan tỏa ánh sáng riêng của mình.
      </p>
      <div className="font-[700] text-white text-[0.6875rem] flex items-center h-4 -translate-x-3">
        <ArrowIcon className="size-9 translate-y-[3px]" />
        <span className="-translate-x-1 text-[0.6875rem] font-[500]">
          Hành trình mở kho báu
        </span>
      </div>
      <ul className="list-inside space-y-1">
        <li>
          <span className="text-[0.6875rem] font-[700] text-white">Bước 1:</span>
          {' '}
          Nhận diện bản thân. Hiểu rõ con số chủ đạo, năng lượng tiềm ẩn, điều khiến bạn thực sự tỏa sáng.
        </li>
        <li>
          <span className="text-[0.6875rem] font-[700] text-white">Bước 2:</span>
          {' '}
          Kích hoạt sức mạnh bên trong. Mỗi ngày, bạn sẽ được gợi ý thử thách nhỏ để rèn luyện tư duy, sự biết ơn và khả năng chia sẻ.
        </li>
        <li>
          <span className="text-[0.6875rem] font-[700] text-white">Bước 3:</span>
          {' '}
          Mở hộp kho báu. Thay vì phần thưởng tài chính, bạn sẽ nhận được thông điệp, bài học, và trải nghiệm chữa lành – giúp bạn đi xa hơn trong hành trình trưởng thành.
        </li>
        <li className="no-bullet translate-x-3">
          <span className="text-[0.6875rem] font-[700] text-white">Bước 4:</span>
          Lan tỏa giá trị. Khi bạn tìm ra kho báu trong chính mình, bạn sẽ trở thành ánh sáng soi đường cho người khác, cùng cộng hưởng để xây dựng một cộng đồng 9x9Plus vững mạnh.
        </li>
      </ul>
    </div>
  );
};

export default WelcomeList1;
