import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './provider';

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
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className=''>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
