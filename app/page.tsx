import DonationForm from '../components/DonationForm';
import Logo from '../components/navbar/Logo';
import TitleContainer from '../components/TitleContainer';

export default function Home() {
  return (
    <section className='p-8 max-w-5xl mx-auto flex flex-col gap-6  '>
      <Logo />
      <div className='w-full md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-4 mx-auto'>
        <TitleContainer />
        <DonationForm />
      </div>
    </section>
  );
}
