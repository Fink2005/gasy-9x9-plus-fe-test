'use client';
import type { ProfileFormData } from '@/app/schema/numerology';
import { profileSchema } from '@/app/schema/numerology';
import { CustomCalendar } from '@/components/CustomCalendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CalendarIcon from '@/libs/shared/icons/Calendar';
import ChevronDown from '@/libs/shared/icons/ChevronDown';
import { formatDate } from '@/libs/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const ProfileForm = () => {
  const [showDateSheet, setShowDateSheet] = useState(false);
  const [showGenderSheet, setShowGenderSheet] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      birthDate: undefined,
      gender: undefined
    }
  });
  const router = useRouter();

  const handleGenderSelect = async (gender: 'Nam' | 'Nữ' | 'Khác') => {
    setValue('gender', gender);
    setShowGenderSheet(false);
    // Trigger validation after setting value
    await trigger('gender');
  };

  const handleDateConfirm = async () => {
    if (selectedDate) {
      setValue('birthDate', selectedDate);
      setShowDateSheet(false);
      // Trigger validation after setting value
      await trigger('birthDate');
    }
  };

  const onSubmit = (data: ProfileFormData) => {
    const formattedDate = format(data.birthDate, 'dd/MM/yyyy');
    const searchParams = new URLSearchParams({
      name: data.fullName,
      birth: formattedDate,
    });
    reset();
    router.push(`/numerology/result?${searchParams.toString()}`);
  };

  return (
    <div className="w-full relative">
      <div className="relative z-10 p-6 space-y-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <Label className="block text-white text-sm font-medium mb-2">Họ và tên</Label>
            <Input
              {...register('fullName')}
              placeholder="Nhập đầy đủ họ tên của bạn"
              className="input-numerology"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-300">{errors.fullName.message}</p>}
          </div>

          {/* Birth Date */}
          <div>
            <Label className="block text-white text-sm font-medium mb-2">Ngày tháng năm sinh</Label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <Sheet open={showDateSheet} onOpenChange={setShowDateSheet}>
                  <SheetTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="input-numberology w-full flex justify-between"
                    >
                      <span className={field.value ? 'text-gray-800' : 'text-gray-500'}>
                        {field.value ? formatDate(field.value) : 'Chọn ngày tháng năm sinh của bạn'}
                      </span>
                      <CalendarIcon />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="rounded-t-lg bg-calendar" side="bottom">
                    <SheetHeader className="hidden">
                      <SheetTitle></SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <CustomCalendar
                      selected={selectedDate || field.value}
                      onSelect={date => setSelectedDate(date)}
                      onCancel={() => setShowDateSheet(false)}
                      onConfirm={handleDateConfirm}
                    />
                  </SheetContent>
                </Sheet>
              )}
            />
            {errors.birthDate && <p className="mt-1 text-sm text-red-300">{errors.birthDate.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <Label className="block text-white text-sm font-medium mb-2">Giới tính</Label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Sheet open={showGenderSheet} onOpenChange={setShowGenderSheet}>
                  <SheetTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="input-numberology w-full flex justify-between"
                    >
                      <span className={field.value ? 'text-gray-800' : 'text-gray-500'}>
                        {field.value || 'Chọn giới tính của bạn'}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="rounded-t-lg bg-calendar">
                    <SheetHeader>
                      <SheetTitle className="text-center text-white text-[1rem] font-[510]">Giới tính</SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <div>
                      {(['Nam', 'Nữ', 'Khác'] as const).map(gender => (
                        <button
                          key={gender}
                          type="button"
                          onClick={() => handleGenderSelect(gender)}
                          className="w-full p-5 text-center text-white rounded-lg transition-colors border-t active:bg-gray-200 hover:bg-gray-500"
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            />
            {errors.gender && <p className="mt-1 text-sm text-red-300">{errors.gender.message}</p>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isValid}
            className="button-base w-full"
          >
            Phân tích
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
