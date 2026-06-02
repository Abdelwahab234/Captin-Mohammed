import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "كابتن محمد حامد - تحولك البدني يبدأ هنا",
  description: "برامج تخسيس وتغذية ومتابعة احترافية تساعدك على الوصول لهدفك بأسرع وأفضل طريقة مع الكابتن محمد حامد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-cairo bg-black text-white">{children}</body>
    </html>
  );
}
