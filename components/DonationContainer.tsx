'use client';

import { useState } from 'react';
import DonateButton from '../components/DonateButton';
import DonationForm from '../components/DonationForm';
import DonationModal from '../components/donationModal';
import Logo from '../components/navbar/Logo';
import TitleContainer from '../components/TitleContainer';

export default function DonationContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  return (
    <div>
      <Logo />
      <div className=' w-full sm:grid sm:grid-cols-2 sm:gap-6 flex flex-col gap-4 mx-auto'>
        <TitleContainer className='' />
        <DonateButton onClick={openModal} hiddenClass='sm:hidden' />

        <DonationForm hiddenClass='sm:flex hidden' />
        {/* <DonationForm hiddenClass='xs:hidden ' /> */}

        <DonationModal
          className='xs:flex sm:hidden'
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
}
