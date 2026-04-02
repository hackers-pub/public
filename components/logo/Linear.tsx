export default function Linear({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/hackers-public-linear.svg" alt="Hackers' Public" />
      <img
        src="/hackers-star.svg"
        id="hackers-public-star"
        className="absolute w-1/12 -right-[7%] top-[35%] animate-wiggle"
      />
    </div>
  );
}
