import { z } from 'zod';

export const KYCSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
});

export type KYCFormData = z.infer<typeof KYCSchema>;
