export default function Seoul1() {
  return (
    <main className="h-svh w-svw bg-black text-white flex justify-center content-center">
      <article className="w-full h-full max-w-[calc(100vh*210/297)] max-h-[calc(100vw*297/210)] aspect-[210/297] relative">
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 right-[15%] top-[15%] rotate-[-30deg] animate-wiggle"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[18%] top-1/2 rotate-[30deg] animate-wiggle"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 right-[16%] bottom-[38%] rotate-[135deg] animate-wiggle"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[45%] bottom-[23%] rotate-[-135deg] animate-wiggle"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[10%] bottom-[15%] rotate-[-45deg] animate-wiggle"
        />
        <img
          src="/hackers-star.svg"
          id="hackers-public-star"
          className="absolute w-1/12 right-[40%] top-[22%] animate-wiggle"
        />
        <img
          src="/hackers-public.svg"
          className="w-2/3 absolute left-[5%] top-[5%]"
          alt="Hackers' Public"
        />
        <img
          src="/hackers-ufo.svg"
          className="w-1/2 absolute right-[5%] top-1/4 animate-anti-wiggle"
        />
        <img
          src="/1st-meetup-seoul.svg"
          className="w-[40%] absolute left-[5%] top-[33%]"
          alt="1st Meetup at Seoul"
        />
        <img
          src="/1st-meetup-date-pos.svg"
          className="w-7/12 absolute left-[5%] bottom-[28%]"
          alt="2025. 09. 14. 15:00 KST 서울특별시 성동구 상원길 26 튜링의 사과"
        />
        <a
          href="https://event-us.kr/hackerspubseoul/event/110961"
          className="w-1/4 absolute right-[5%] bottom-[18%]"
        >
          <img
            src="/1st-meatup-eventus-qrcode.svg"
            className="h-full w-full"
            alt="EventUs QR Code"
          />
        </a>
        <a
          href="https://hackers.pub/@jakeseo"
          className="h-[5%] absolute right-[5%] bottom-[12%]"
        >
          <img
            src="/1st-meetup-session1.svg"
            className="h-full"
            alt="Code As A Canvas : 코드에서 예술작품이 되기까지 (@jakeseo@hackers.pub)"
          />
        </a>
        <hr className="my-2 color-white w-[45%] absolute right-[5%] bottom-[10%]" />
        <a
          href="https://hackers.pub/@dalgona"
          className="h-[5%] absolute right-[5%] bottom-[5%]"
        >
          <img
            src="/1st-meetup-session2.svg"
            className="h-full"
            alt="폰트는 어떻게 만들어지는가 - NeoDGM 사례로 살펴보는 개발 후일담 (@dalgona@hackers.pub)"
          />
        </a>
      </article>
    </main>
  );
}
