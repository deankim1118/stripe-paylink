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

type CardProps = React.ComponentProps<typeof Card>;

export default function TitleContainer({ className }: CardProps) {
  return (
    <div>
      <Card className={cn('w-full', className)}>
        <CardHeader className='relative w-full'>
          <Image
            src='/goodspoonLogo.jpg'
            width={500}
            height={250}
            alt='verse image'
            className=''
          />
        </CardHeader>
        <CardTitle className='text-2xl px-6'>
          <p>Good Spoon</p>
        </CardTitle>
        <CardContent>
          <p>Thank you for your support</p>
        </CardContent>
        <CardFooter>
          <div className='flex flex-col gap-1'>
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
