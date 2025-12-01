import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://public.hackers.pub"),
  title: {
    default: "Hackers' Public",
    template: "Hackers' Public %s",
  },
  description: "Hackers' Public",
  openGraph: {
    images: ["https://public.hackers.pub/2025/end"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
