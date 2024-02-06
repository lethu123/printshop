import type { Metadata } from "next";
import './globals.scss'; 

export const metadata: Metadata = {
  title: "Nhà in Dương Phong",
  description: "Công ty TNHH Quảng cáo & Thương mại Dương Phong – DPA – Sự lớn mạnh của bạn là thành công của chúng tôi",
  keywords: ['nhà in', 'Dương phong', 'xưởng in', 'xưởng in Dương Phong'],
  openGraph: {
    images: 'http://dpa.vn/wp-content/uploads/2016/07/dpa-logo.png' ,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body  >{children}</body>
    </html>
  );
}
