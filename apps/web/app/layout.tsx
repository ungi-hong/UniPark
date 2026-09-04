import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ServiceWorkerRegister } from "./sw-register";
import { Footer } from "./footer";
import { AppNav } from "./app-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shogaisha-kurashi.com"),
  title: {
    default: "障害者くらしナビ",
    template: "%s | 障害者くらしナビ",
  },
  description:
    "障害者向けの制度、割引施設、バリアフリー情報、駐車場情報を探せるWebサービスです。",
  appleWebApp: {
    capable: true,
    title: "障害者くらしナビ",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#1769aa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppNav />
        <Providers>{children}</Providers>
        <Footer />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
