'use server';

import { redirect } from 'next/navigation';

export const submitOnetimePayment = async (
  prevState: unknown,
  formData: FormData,
): Promise<{ message: string }> => {
  const link = formData.get('oneTimeLink') as string;
  if (!link) {
    return { message: 'Please Choose a One-Time Payment Amount.' };
  }
  console.log(link);
  redirect(link);
};

export const submitMonthlyPayment = async (
  prevState: unknown,
  formData: FormData,
): Promise<{ message: string }> => {
  const link = formData.get('monthlyLink') as string;
  if (!link) {
    return { message: 'Please Choose a Monthly Payment Amount.' };
  }
  console.log(link);
  redirect(link);
};
