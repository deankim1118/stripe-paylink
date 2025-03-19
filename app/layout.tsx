import type { Metadata } from 'next';
// import { Toaster } from '@/components/ui/sonner';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Donote Good Spoon',
  description:
    'Donate for Good Spoon Religious non-profit organization to help homeless, latino',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <Toaster /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
