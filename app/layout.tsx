import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pauline - Portfolio',
  description: 'Portfolio of Pauline.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
