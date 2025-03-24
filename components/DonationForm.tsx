'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import PriceButton from './PriceButton';
import { monthlyPrice, oneTimePrice } from '../utils/onetimePrice';
import DonateButton from './DonateButton';
import FormContainer from './FormContainer';
import { submitMonthlyPayment, submitOnetimePayment } from '../utils/action';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // 기본 스타일
import { IoShieldCheckmark } from 'react-icons/io5';

export default function DonationForm({
  hiddenClass,
}: {
  hiddenClass?: string;
}) {
  const [selectedLink, setSelectedLink] = useState<string>('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('.price-button') &&
        !target.closest('.donate-button')
      ) {
        setSelectedLink('');
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <Card
      className={`xs:p-4 xs:justify-center justify-start pt-10 w-full h-full ${hiddenClass}`}
    >
      <CardHeader>
        <CardTitle className='text-center flex items-center justify-center gap-3'>
          <Tippy
            content="We use industry-leading SSL and encryption to keep your information secure. We never access or store your payment details; they're sent directly to Stripe which is payment providers."
            trigger='click'
            visible={visible}
            onClickOutside={() => setVisible(false)}
            onTrigger={(trigger) => console.log(trigger)}
          >
            <button
              type='button'
              aria-label='Security Info'
              onClick={() => setVisible((prev) => !prev)}
              className='flex items-center rounded-full focus:outline-none focus-visible:bg-gray-100'
            >
              <IoShieldCheckmark className='size-6 text-green-600' />
            </button>
          </Tippy>
          Choose Amount
        </CardTitle>
        <CardDescription className='text-center text-md font-light'>
          Good Spoon Urban Ministry
        </CardDescription>
      </CardHeader>
      <Tabs defaultValue='onetime' className='w-full '>
        <TabsList className='grid w-full grid-cols-2 '>
          <TabsTrigger className='cursor-pointer' value='onetime'>
            One-Time
          </TabsTrigger>
          <TabsTrigger className='cursor-pointer' value='monthly'>
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='onetime'>
          <FormContainer action={submitOnetimePayment}>
            <Card className='pt-6'>
              <CardContent className='grid grid-cols-3 gap-2 '>
                {oneTimePrice.map((item, index) => (
                  <div key={index}>
                    <PriceButton
                      key={item.link}
                      text={`$ ${item.price}`}
                      link={item.link}
                      className='w-full price-button'
                      setSelectedLink={setSelectedLink}
                    />
                    <input
                      type='hidden'
                      name='oneTimeLink'
                      value={selectedLink}
                    />
                  </div>
                ))}
              </CardContent>
              <CardContent>
                <DonateButton className='donate-button' />
              </CardContent>
              <CardFooter className='bg-secondary h-full py-4'>
                <div className='flex flex-col w-full gap-1'>
                  <h3 className='text-2xl font-extralight text-center text-purple-700/80'>
                    <span>Send money with Zelle</span>
                    <span className='text-sm align-super'>&reg;</span>
                  </h3>
                  <p className='text-xl font-light'>
                    Scan in your banking app to pay
                  </p>
                  <p className='self-end'>
                    <span className='uppercase text-lg'>Good spoon </span>
                    <span className='font-light'>at </span>{' '}
                    <span className='font-semibold'>
                      goodspoonusa@gmaill.com
                    </span>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </FormContainer>
        </TabsContent>
        <TabsContent value='monthly'>
          <FormContainer action={submitMonthlyPayment}>
            <Card className='pt-6'>
              <CardContent className='grid grid-cols-3 gap-2'>
                {monthlyPrice.map((item, index) => (
                  <div key={index}>
                    <PriceButton
                      key={item.link}
                      text={`$ ${item.price}`}
                      link={item.link}
                      className='w-full price-button'
                      setSelectedLink={setSelectedLink}
                    />
                    <input
                      type='hidden'
                      name='monthlyLink'
                      value={selectedLink}
                    />
                  </div>
                ))}
              </CardContent>
              <CardContent>
                <DonateButton className='donate-button' />
              </CardContent>
              <CardFooter className='bg-secondary h-full py-4 text-secondary-foreground'>
                <div className='flex flex-col w-full gap-1'>
                  <h3 className='text-2xl font-extralight text-center text-purple-700/80'>
                    <span>Send money with Zelle</span>
                    <span className='text-sm align-super'>&reg;</span>
                  </h3>
                  <p className='text-xl font-light'>
                    Scan in your banking app to pay
                  </p>
                  <p className='self-end'>
                    <span className='uppercase text-lg'>Good spoon </span>
                    <span className='font-light'>at </span>{' '}
                    <span className='font-semibold'>
                      goodspoonusa@gmaill.com
                    </span>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </FormContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
