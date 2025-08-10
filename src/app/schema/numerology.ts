import z from 'zod';

export const profileSchema = z.object({
  fullName: z.string().min(1, 'Vui lòng nhập họ và tên'),
  birthDate: z.date().refine(date => date !== null, {
    message: 'Vui lòng chọn ngày sinh',
  }),
  gender: z.enum(['Nam', 'Nữ', 'Khác'], {
    message: 'Vui lòng chọn giới tính',
  }),
});
export type ProfileFormData = z.infer<typeof profileSchema>;
