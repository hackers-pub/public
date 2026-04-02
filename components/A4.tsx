export default function A4({ children }: { children: React.ReactNode }) {
  return (
    <article className="@container w-full h-full max-w-[calc(100vh*210/297)] max-h-[calc(100vw*297/210)] aspect-210/297 relative">
      {children}
    </article>
  );
}
