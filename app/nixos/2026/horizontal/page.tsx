import { Suspense } from "react";
import HackersPublic from "@/components/logo/Linear";
import Main from "@/components/Main";
import PubNyan from "@/components/pub-nyan/default";
import Host from "@/components/profiles/bglgwyng";

export default function End2025() {
  return (
    <Main>
      <article className="@container w-full h-full max-w-[calc(100vh*1200/630)] max-h-[calc(100vw*630/1200)] aspect-[1200/630] relative">
        <NixStar className="right-[10%] top-[10%]" />
        <NixStar className="left-[20%] top-[48%] -rotate-15" />
        <NixStar className="left-[40%] bottom-[15%] rotate-15" />
        <HackersPublic className="w-1/2 absolute left-[5%] top-[5%]" />
        <PubNyan className="absolute right-[15%] top-[20%] w-1/3 animate-anti-wiggle" />
        <Subtitle />
        <DatePos className="absolute left-[5%] bottom-[10%] w-1/2 text-[2.5cqw]" />
        <Suspense>
          <Host className="absolute right-[5%] bottom-[5%] w-1/4 rounded-full" />
        </Suspense>
      </article>
    </Main>
  );
}

function NixStar({ className }: { className?: string }) {
  return (
    <img
      src="/nixos-logo/flake.svg"
      className={`absolute w-1/12 animate-wiggle ${className}`}
    />
  );
}
function Subtitle() {
  return (
    <p className="absolute left-[5%] top-[25%] w-1/2 text-[4cqw] leading-tight">
      2026 <NixHor className="w-1/3 inline relative bottom-0.5" /> Workshop
      <br />
      <NixHor className="w-1/3 inline relative bottom-0.5" /> 왜 안 쓰
      <span className="font-bold">닋</span>?
    </p>
  );
}

function NixHor({ className }: { className?: string }) {
  return (
    <img src="/nixos-logo/horizontal.svg" className={className} alt="NisOS" />
  );
}

function DatePos({ className }: { className?: string }) {
  return (
    <a
      href="/calendar/nixos-2026.ics"
      download
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
    >
      <p className="left-[5%] top-[31%] leading-tight">
        2026년 04월 19일
        <br />
        14:00~18:00 KST
        <br />
        서울 성동구 상원길 26
        <br />
        밀크빌딩 지하1층 튜링의 사과
      </p>
    </a>
  );
}
