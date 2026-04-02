export default function Linear({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/hackers-public-linear.svg" alt="Hackers' Public" />
      <img
        src="/hackers-star.svg"
        id="hackers-public-star"
        className="absolute h-1/2 -right-[8%] top-[30%] animate-wiggle -rotate-90"
      />
    </div>
  );
}
