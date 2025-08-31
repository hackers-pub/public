import type { Metadata } from "next";
import { Nanum_Gothic, Chewy } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum-gothic",
  weight: ["400", "800"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hackers' Public 1st Meetup at Seoul",
  description:
    "Hackers' Public 1st Meetup at Seoul - Join us for an exciting event!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable} ${chewy.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
