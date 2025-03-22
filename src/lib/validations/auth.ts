import { z } from 'zod';

export const signUpSchema = z
  .object({
    fullName: z
      .string({
        required_error: 'required',
      })
      .min(3, {
        message: 'min',
      })
      .max(255, {
        message: 'max',
      }),

    email: z
      .string({
        required_error: 'required',
      })
      .email({
        message: 'invalid',
      }),

    password: z
      .string({
        required_error: 'required',
      })
      .min(8, {
        message: 'min',
      })
      .max(255, {
        message: 'max',
      }),

    confirmPassword: z
      .string({
        required_error: 'required',
      })
      .min(8, {
        message: 'min',
      })
      .max(255, {
        message: 'max',
      }),

    idCardNumber: z.coerce.string().optional(),
    idCard: z.string().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'passwordsDoNotMatch',
        path: ['confirmPassword'],
      });
    }
  });

export const signInSchema = z.object({
  email: z
    .string({
      required_error: 'required',
    })
    .email({
      message: 'invalid',
    }),

  password: z
    .string({
      required_error: 'required',
    })
    .min(8, {
      message: 'min',
    })
    .max(255, {
      message: 'max',
    }),
});
