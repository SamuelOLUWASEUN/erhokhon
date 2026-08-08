import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Erhokhon — Your Money. No Middlemen. No Delays.",
  description:
    "Send, receive, and grow your finances with military-grade security and zero fees. Join the future of global banking.",
  metadataBase: new URL("https://erhokhon.example.com"),
  openGraph: {
    title: "Erhokhon — Your Money. No Middlemen. No Delays.",
    description:
      "Send, receive, and grow your finances with military-grade security and zero fees.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
