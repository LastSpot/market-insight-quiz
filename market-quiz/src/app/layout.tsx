import type { Metadata } from "next";
import { inter } from '@/components/ui/fonts';
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import './globals.css';

export const metadata: Metadata = {
  title: "Market Quiz",
  description: "Market Quiz is a quiz game that tests your knowledge of market insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
