import type { Metadata } from "next";
import './globals.scss';
import type { Viewport } from 'next'
import '../../i18n'

export const metadata: Metadata = {
  title: "Nhà in Dương Phong",
  description: "Công ty TNHH Quảng cáo & Thương mại Dương Phong – DPA – Sự lớn mạnh của bạn là thành công của chúng tôi",
  keywords: ['nhà in', 'Dương phong', 'xưởng in', 'xưởng in Dương Phong'],
  openGraph: {
    images: 'http://dpa.vn/wp-content/uploads/2016/07/dpa-logo.png',
  },
};



export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <body className="light-mode relative" >{children}</body>
    </html>
  );
}
