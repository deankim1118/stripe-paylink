'use client';

import { Button } from '@/components/ui/button';

import { useFormStatus } from 'react-dom';
import { LoadingButton } from './LoadingButton';

export default function DonateButton() {
  const { pending } = useFormStatus();

  return (
    <div className='w-full '>
      <Button
        className='w-full cursor-pointer'
        size='lg'
        disabled={pending}
        asChild
      >
        {/* <Link href='/goodspoon'>{pending ? <LoadingButton /> : 'Donate'}</Link> */}
        {pending ? <LoadingButton /> : <button type='submit'>Donate</button>}
      </Button>
    </div>
  );
}
