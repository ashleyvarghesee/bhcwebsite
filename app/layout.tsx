import './globals.css';
import type { Metadata } from 'next';
import Layout from './components/Layout';
import { IBM_Plex_Sans, Libre_Baskerville } from 'next/font/google';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Bruin Health Consulting',
  description: 'Healthcare consulting services by UCLA students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${libreBaskerville.variable} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
