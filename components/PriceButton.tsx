'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
type btnSize = 'default' | 'lg' | 'sm';

interface SubmitButtonProps {
  className?: string;
  text?: string;
  size?: btnSize;
  link: string;
  setSelectedLink: (link: string) => void;
}

export default function PriceButton({
  className = '',
  text = 'button',
  size = 'lg',
  link,
  setSelectedLink,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  const handleClickButton = () => {
    setSelectedLink(link);
  };

  return (
    <>
      <Button
        variant='outline'
        type='button'
        disabled={pending}
        size={size}
        className={`capitalize font-semibold focus:bg-primary/80 cursor-pointer ${className}`}
        onClick={handleClickButton}
      >
        <span>{text}</span>
      </Button>
    </>
  );
}
