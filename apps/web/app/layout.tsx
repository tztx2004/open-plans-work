import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@shared/config/queryProvider';

export const metadata: Metadata = {
  title: '정찬 입니다',
  description: 'open plans work',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
