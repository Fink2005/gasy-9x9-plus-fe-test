/* eslint-disable react/no-array-index-key */
'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface CustomCalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export function CustomCalendar({ selected, onSelect, onCancel, onConfirm }: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(selected?.getMonth() || new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(selected?.getFullYear() || new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(selected);

  const months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const daysInPrevMonth = getDaysInMonth(currentMonth - 1, currentYear);
    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, daysInPrevMonth - i),
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(currentYear, currentMonth, day),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, day),
      });
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelect?.(date);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm?.();
    }
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDate) {
      return false;
    }
    return (
      date.getDate() === selectedDate.getDate()
      && date.getMonth() === selectedDate.getMonth()
      && date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="rounded-lg p-6 w-full max-w-md mx-auto">
      {/* Month and Year Selectors */}
      <div className="flex gap-4 mb-6">
        <Select value={currentMonth.toString()} onValueChange={value => setCurrentMonth(Number.parseInt(value))}>
          <SelectTrigger className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <SelectValue />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </SelectTrigger>
          <SelectContent>
            {months.map((month, index) => (
              <SelectItem key={index} value={index.toString()}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={currentYear.toString()} onValueChange={value => setCurrentYear(Number.parseInt(value))}>
          <SelectTrigger className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <SelectValue />
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </SelectTrigger>
          <SelectContent className="max-h-72 overflow-y-auto">
            {years.map(year => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-white   py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1 ">
          {generateCalendarDays().map((dayObj, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleDateClick(dayObj.date)}
              className={`
                h-10 w-10 text-sm text-white rounded-lg transition-colors hover:bg-gray-100 hover:text-black w-14
                ${dayObj.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                ${isDateSelected(dayObj.date) ? 'button-calendar  text-white' : ''}
              `}
            >
              {dayObj.day}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          variant="outline"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300  bg-white rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Hủy bỏ
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={!selectedDate}
          className="px-6 py-2 button-calendar text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}
