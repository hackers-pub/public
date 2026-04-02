export default function HackersPublic({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/hackers-public.svg" alt="Hackers' Public" />
      <img
        src="/hackers-star.svg"
        id="hackers-public-star"
        className="absolute w-[15%] right-[16%] bottom-[8%] animate-wiggle"
      />
    </div>
  );
}
