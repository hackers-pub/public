import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1st Meetup at Seoul",
  description:
    "Hackers' Public 1st Meetup at Seoul - Join us for an exciting event!",
};

export default function Seoul1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
