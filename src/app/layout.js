import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Ashraful Malik | Full-Stack Developer & UI Designer',
  description:
    "Hi, I'm Ashraful malik, a full stack developer and creative frontend designer. I craft modern, scalable, and user-friendly web experiences that bring ideas to life.",
  openGraph: {
    title: 'Ashraful Malik | Full-Stack Developer & UI Designer',
    description:
      'Full Stack Developer & Frontend Designer creating modern, scalable, and user-friendly web experiences.',
    url: 'https://ashrafulmalik.online/',
    siteName: 'Ashraful Malik portfolio',
    images: [
      {
        url: '/image/portfolio-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashraful Malik | Full-Stack Developer & UI Designer',
    description:
      'Full Stack Developer & Frontend Designer creating modern, scalable, and user-friendly web experiences.',
    images: '/image/portfolio-image.png',
    creator: '@ashraful__malik',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
