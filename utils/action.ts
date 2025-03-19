'use server';

import { redirect } from 'next/navigation';

export const submitOnetimePayment = async (
  prevState: unknown,
  formData: FormData,
): Promise<{ message: string }> => {
  const link = formData.get('oneTimeLink') as string;
  if (!link) {
    return { message: 'Please click a One-Time Payment Price.' };
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
    return { message: 'Please click a Monthly Payment Price.' };
  }
  console.log(link);
  redirect(link);
};
