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

export default function DonationForm({
  hiddenClass,
}: {
  hiddenClass?: string;
}) {
  const [selectedLink, setSelectedLink] = useState<string>('');

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
      className={`p-4 xs:justify-center justify-start w-full h-full ${hiddenClass}`}
    >
      <CardHeader>
        <CardTitle className='text-center'>Choose Amount</CardTitle>
        <CardDescription>Good Spoon</CardDescription>
      </CardHeader>
      <Tabs defaultValue='onetime' className='w-full '>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='onetime'>One-Time</TabsTrigger>
          <TabsTrigger value='monthly'>Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value='onetime'>
          <FormContainer action={submitOnetimePayment}>
            <Card>
              <CardContent className='grid grid-cols-3 gap-2 '>
                {oneTimePrice.map((item, index) => (
                  <div key={index}>
                    <PriceButton
                      key={item.link}
                      text={`$ ${item.price}`}
                      link={item.link}
                      className='w-full price-button '
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
              <CardFooter>
                <DonateButton className='donate-button' />
              </CardFooter>
            </Card>
          </FormContainer>
        </TabsContent>
        <TabsContent value='monthly'>
          <FormContainer action={submitMonthlyPayment}>
            <Card>
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
              <CardFooter>
                <DonateButton className='donate-button' />
              </CardFooter>
            </Card>
          </FormContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
