import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Truyen MQ",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  description: "Đọc truyện mọi nơi",
  icons: {
    icon: ["/Images/logo-icon.ico?v=10"],
    apple: "/Images/logo-icon.ico?v=10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Truyenqq" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
