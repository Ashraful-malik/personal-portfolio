import './globals.css';
import { generalSans } from '../lib/fonts';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Ashraful Malik | Full-Stack Developer & UI Designer',
  description: "Ashraful Malik's personal portfolio showcasing projects and skills.",
  openGraph: {
    title: 'Ashraful Malik | Full-Stack Developer & UI Designer',
    description: "Ashraful Malik's personal portfolio showcasing projects and skills.",
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
    description: "Ashraful Malik's personal portfolio showcasing projects and skills.",
    images: '/image/portfolio-image.png',
    creator: '@ashraful__malik',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${generalSans.variable} antialiased`}>
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
