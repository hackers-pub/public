export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-svh w-svw bg-black text-white flex justify-center content-center overflow-hidden">
      {children}
    </main>
  );
}
