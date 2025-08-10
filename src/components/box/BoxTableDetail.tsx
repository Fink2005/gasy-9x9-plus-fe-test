'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

type BoxData = {
  box: string;
  f1: number;
  connection: string;
};

// You can remove this and use your own value from props or context

export default function BoxTableDetail({ totalUser }: { totalUser: number }) {
  const calculateBoxData = (f1: number): BoxData[] => {
    const boxes: BoxData[] = [];
    let remainingF1: number = f1;

    for (let i = 0; i < 9; i++) {
      const boxIndex = i + 1;
      const connectionValue = 9 ** boxIndex;

      let f1Value = 0;
      if (remainingF1 > 0) {
        f1Value = Math.min(remainingF1, connectionValue);
        remainingF1 -= f1Value;
      }

      boxes.push({
        box: `Box ${boxIndex}`,
        f1: f1Value,
        connection: connectionValue.toLocaleString('vi-VN'),
      });
    }

    return boxes;
  };

  const data: BoxData[] = calculateBoxData(totalUser);

  return (
    <div className="p-4 w-full box-table text-white">
      <h2 className="text-center text-shadow-custom text-[1.25rem] font-[700] mb-4">
        Thống kê số lượng
      </h2>
      <Table className="text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="text-shadow-custom font-[700] text-[1rem] text-center">Mở khóa</TableHead>
            <TableHead className="text-shadow-custom font-[700] text-[1rem] text-center">F1 trực tiếp</TableHead>
            <TableHead className="text-shadow-custom font-[700] text-[1rem] text-center">Kết nối lan tỏa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.box} className="text-shadow-custom font-[700] text-[1rem]">
              <TableCell className="text-center">{row.box}</TableCell>
              <TableCell className="text-center">{row.f1}</TableCell>
              <TableCell className="text-center">{row.connection}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
