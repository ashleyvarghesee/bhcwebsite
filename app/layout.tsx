import './globals.css';
import type { Metadata } from 'next';
import Layout from './components/Layout';
import { Inter, Raleway } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway', weight: ['400', '700'] });

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
      <body className={`${inter.variable} ${raleway.variable} font-sans`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
