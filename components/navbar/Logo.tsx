import Image from 'next/image';

export default function Logo() {
  return (
    <div className='relative w-1/3 xs:mb-8 h-[110px] md:w-[200px] md:h-[110px] '>
      <Image
        fill
        src='/goodspoonLogo.jpg'
        alt='good spoon logo'
        priority
        sizes='(max-width: 768px) 180px, 200px'
        className='h-auto w-full object-contain'
      />
    </div>
  );
}
