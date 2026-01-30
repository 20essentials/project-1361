import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'NextJs 15: Subdomain-based multi-tenant ',
  description: 'Building a multi-tenant SaaS.',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>
        <section className='fixed w-full h-screen z-0 bg-contain bg-center bg-[url(/1361-bg.svg)]'></section>
        {children}
      </body>
    </html>
  );
}
