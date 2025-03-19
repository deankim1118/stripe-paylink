import Image from 'next/image';

export default function Logo() {
  return (
    <div className='h-auto w-1/3 max-h-[90px] max-w-[200px] md:max-h-[110px]'>
      <Image
        width={200}
        height={110}
        src='/goodspoonLogo.jpg'
        alt='good spoon logo'
        priority
      />
    </div>
  );
}
