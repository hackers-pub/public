import A4 from "./A4";
import HackersPublic from "./HackersPublic";
import Main from "./Main";
import PubNyan from "./pub-nyan/default";
import Host from "@/components/profiles/bglgwyng";
import { Suspense } from "react";

export default function End2025() {
  return (
    <Main>
      <A4>
        <NixStar className="right-[12%] top-[7%] -rotate-30" />
        <NixStar className="right-[5%] top-[25%] rotate-45" />
        <NixStar className="right-[30%] top-[40%] rotate-90" />
        <HackersPublic className="w-2/3 absolute left-[5%] top-[5%]" />
        <PubNyan className="w-1/2 absolute left-[5%] top-[42%] animate-anti-wiggle" />
        <Subtitle className="absolute left-[5%] top-[31%] w-2/3 text-[5cqw]" />
        <DatePos className="absolute left-[5%] bottom-[10%] w-2/3 text-[4cqw]" />
        <Suspense>
          <Host className="absolute right-[5%] bottom-[15%] w-1/2 rounded-full" />
        </Suspense>
      </A4>
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

function Subtitle({ className }: { className?: string }) {
  return (
    <p className={`leading-tight ${className}`}>
      2026 <NixHor className="w-1/4 inline relative bottom-0.5" /> Workshop
      <br />
      <NixHor className="w-1/4 inline relative bottom-0.5" /> 왜 안 쓰닋?
    </p>
  );
}

function NixHor({ className }: { className?: string }) {
  return <img src="/nixos-logo/horizontal.svg" className={className} />;
}

function DatePos({ className }: { className?: string }) {
  return (
    <a
      href="/nixos-2026.ics"
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
