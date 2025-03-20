import ReactDOM from 'react-dom';
import DonationForm from './DonationForm';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  className: string;
}

export default function DonationModal({
  isOpen,
  onClose,
  className,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center bg-slate-700/85 overflow-auto transition-transform ${className}`}
    >
      <dialog
        open={isOpen}
        className='xs:mx-auto xs:rounded-xl h-full xs:h-auto transition-transform w-screen xs:max-w-max'
      >
        <DonationForm hiddenClass='xs:w-[470px]' />
        <Button
          variant='outline'
          size='icon'
          onClick={onClose}
          className='absolute top-7 right-7 text-6xl bg-primary text-white hover:bg-secondary hover:text-primary'
        >
          <X className='size-8 ' />
        </Button>
      </dialog>
    </div>,
    document.body,
  );
}
