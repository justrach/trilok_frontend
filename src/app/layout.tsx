import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Playfair_Display, DM_Sans } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://trilok.ai'),
  title: "trilok.ai - High Performance Open Source Libraries",
  description: "A suite of high-performance libraries crafted with precision, bridging ancient wisdom with modern engineering.",
  openGraph: {
    title: 'trilok.ai - High Performance Open Source Libraries',
    description: 'A suite of high-performance libraries crafted with precision, bridging ancient wisdom with modern engineering.',
    url: 'https://trilok.ai',
    siteName: 'trilok.ai',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'trilok.ai - High Performance Open Source Libraries',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'trilok.ai - High Performance Open Source Libraries',
    description: 'A suite of high-performance libraries crafted with precision, bridging ancient wisdom with modern engineering.',
    creator: '@rachpradhan',
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
