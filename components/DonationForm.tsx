'use client';

import {
  Card,
  CardContent,
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
import { useState } from 'react';

export default function DonationForm() {
  const [selectedLink, setSelectedLink] = useState<string>('');

  return (
    <Card className='p-8 justify-center'>
      <CardHeader>
        <CardTitle>Good Spoon</CardTitle>
      </CardHeader>
      <Tabs defaultValue='onetime' className='w-full'>
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
                      className='w-full'
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
                <DonateButton />
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
                      className='w-full'
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
                <DonateButton />
              </CardFooter>
            </Card>
          </FormContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
