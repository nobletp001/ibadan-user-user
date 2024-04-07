import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Providers from "@/utils/provider";
import { Toaster } from "sonner";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibadan Agent.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
        <Toaster position="top-right" expand={false} />
      </body>
    </html>
  );
}
