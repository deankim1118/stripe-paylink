'use client';

import { Button } from '@/components/ui/button';

import { useFormStatus } from 'react-dom';
import { LoadingButton } from './LoadingButton';

export default function DonateButton({
  className,
  hiddenClass,
  onClick,
}: {
  className?: string;
  hiddenClass?: string;
  onClick?: () => void;
}) {
  const { pending } = useFormStatus();

  return (
    <div className={`w-full ${hiddenClass}`}>
      <Button
        className='w-full cursor-pointer'
        size='lg'
        disabled={pending}
        asChild
      >
        {/* <Link href='/goodspoon'>{pending ? <LoadingButton /> : 'Donate'}</Link> */}
        {pending ? (
          <LoadingButton />
        ) : (
          <button className={className} type='submit' onClick={onClick}>
            Donate
          </button>
        )}
      </Button>
    </div>
  );
}
