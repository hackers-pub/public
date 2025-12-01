import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://public.hackers.pub"),
  title: "2025 Retrospective & Lightning Talk",
  description:
    "Hackers' Public 2025 Retrospective & Lightning Talk - Join us for an exciting event!",
};

export default function Seoul1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
