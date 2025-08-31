export default async function Page() {
  return (
    <main className="h-svh w-svw bg-black text-white flex justify-center content-center">
      <article className="w-full h-full max-w-[calc(100vh*210/297)] max-h-[calc(100vw*297/210)] aspect-[210/297] relative">
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 right-[15%] top-[15%] rotate-[-30deg]"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[10%] top-1/2 rotate-[30deg]"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 right-[16%] bottom-[30%] rotate-[135deg]"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[33%] bottom-[26%] rotate-[-135deg]"
        />
        <img
          src="/hackers-star.svg"
          className="absolute w-1/12 left-[5%] bottom-[5%] rotate-[-45deg]"
        />
        <img
          src="/hackers-star.svg"
          id="hackers-public-star"
          className="absolute w-1/12 right-[40%] top-[22%]"
        />
        <img
          src="/hackers-public.svg"
          className="w-2/3 absolute left-[5%] top-[5%]"
          alt="Hackers' Public"
        />
        <img
          src="/hackers-ufo.svg"
          className="w-1/2 absolute right-[5%] top-1/4"
        />
        <p
          className="absolute top-[30%] left-[5%] font-[Chewy] leading-tight"
          style={{ fontSize: "clamp(1.5rem, 8vw, 3.5rem)" }}
        >
          <span>1st MEETUP</span>
          <br />
          <span>@SEOUL</span>
        </p>
        <p
          className="absolute top-[58%] left-[5%] font-[Nanum_Gothic]"
          style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.875rem)" }}
        >
          <span>2025. 09. 14. 15:00 KST</span>
          <br />
          <span>서울특별시 성동구 상원길 26</span>
          <br />
          <span>튜링의 사과</span>
        </p>

        <div
          className="absolute bottom-[8%] right-[5%] text-right font-[Nanum_Gothic]"
          style={{ fontSize: "clamp(0.5rem, 2.5vw, 1.125rem)" }}
        >
          <p>
            <b>Code As A Canvas : 코드에서 예술작품이 되기까지</b>
            <br />
            <a href="https://hackers.pub/@jakeseo">(@jakeseo@hackers.pub)</a>
          </p>
          <hr className="my-2 color-white w-1/2 ml-auto" />
          <p>
            <b>
              폰트는 어떻게 만들어지는가 - NeoDGM 사례로 살펴보는 개발 후일담
            </b>
            <br />
            <a href="https://hackers.pub/@dalgona">(@dalgona@hackers.pub)</a>
          </p>
        </div>
      </article>
    </main>
  );
}
