import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { VERSE_CARD } from '../utils/constants';

type CardProps = React.ComponentProps<typeof Card>;

export default function TitleContainer({ className }: CardProps) {
  return (
    <div>
      <Card className={cn('w-full h-full justify-between pb-0', className)}>
        <CardHeader className='relative w-full px-0'>
          <Image
            src={VERSE_CARD}
            width={500}
            height={250}
            alt='verse image'
            className='w-full'
            priority
          />
        </CardHeader>
        <CardTitle className='text-primary px-6'>
          <p>Good Spoon Urban Ministry</p>
        </CardTitle>
        <CardContent className='text-lg text-secondary-foreground'>
          <p>Thank you for your support</p>
        </CardContent>
        <CardFooter className='bg-secondary py-4 text-secondary-foreground'>
          <div className='flex flex-col gap-1 text-xs leading-3 '>
            <p>Organized by Good Spoon</p>
            <p>501(c)(3) Public Charity · EIN 20-1182359</p>
            <Link href='mailto:on.goodspoon@gmail.com' className='underline'>
              on.goodspoon@gmail.com
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
