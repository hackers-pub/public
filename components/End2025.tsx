export default function End2025() {
  return (
    <main className="h-svh w-svw bg-black text-white flex justify-center content-center overflow-hidden">
      <article className="w-full h-full max-w-[calc(100vh*210/297)] max-h-[calc(100vw*297/210)] aspect-210/297 relative">
        <Star className="right-[12%] top-[7%] -rotate-30" />
        <Star className="right-[5%] top-[25%] rotate-45" />
        <Star className="left-[40%] top-[54%] rotate-135" />
        <Star className="right-[16%] bottom-[28%] -rotate-120" />
        <Star className="right-[30%] top-[40%] rotate-90" />
        <HackersPublicStar />
        <HackersPublic />
        <LightningSanta />
        <Subtitle />
        <DatePos />
        <QRCode />
      </article>
    </main>
  );
}

function LightningSanta() {
  return (
    <img
      src="/2025-retrospective-lightening-santa.svg"
      className="w-[120%] absolute rotate-[-20deg] left-[5%] bottom-[10%] origin-[25%_50%] animate-wiggle"
    />
  );
}

function Star({ className }: { className?: string }) {
  return (
    <img
      src="/hackers-star.svg"
      className={`absolute w-1/12 animate-wiggle ${className}`}
    />
  );
}

function HackersPublicStar() {
  return (
    <img
      src="/hackers-star.svg"
      id="hackers-public-star"
      className="absolute w-1/12 right-[40%] top-[22%] animate-wiggle"
    />
  );
}

function HackersPublic() {
  return (
    <img
      src="/hackers-public.svg"
      className="w-2/3 absolute left-[5%] top-[5%]"
      alt="Hackers' Public"
    />
  );
}
function Subtitle() {
  return (
    <img
      className="absolute left-[5%] top-[31%] w-7/12"
      src="/2025-retrospective-and-lightning-talk.svg"
      alt="2025 Retrospective and Lightning Talk"
    />
  );
}

function DatePos() {
  return (
    <a
      href="/hackers-public-2025-retrospective.ics"
      download
      className="absolute left-[5%] top-[42%] w-5/12 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <img
        src="/2025-retrospective-date-pos.svg"
        alt="2025년 12월 21일 14:00 KST, 서울 서대문구 연희로2길 76, 한빛빌딩 A동 2층 강의실40 - 클릭하여 캘린더에 추가"
        className="w-full"
      />
    </a>
  );
}

function QRCode() {
  return (
    <a
      href="https://hackers.pub/@kodingwarrior/invite/019904e6-0f62-77d4-98cc-61a7eee47f78"
      className="w-1/4 absolute right-[5%] bottom-[5%]"
      target="_blank"
    >
      <img
        src="/2025-retrospective-qrcode.svg"
        className="h-full w-full"
        alt="Invite QR Code"
      />
    </a>
  );
}
