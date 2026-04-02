import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://public.hackers.pub"),
  title: "2026 Nix Workshop",
  description:
    "Hackers' Public 2026 Nix Workshop - Join us for an exciting event!",
};

export default function Nix2026Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
