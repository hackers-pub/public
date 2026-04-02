import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Hackers' Public 2026 NixOS Workshop - NixOS 왜 안 쓰닋? 2026년 04월 19일 14:00~18:00 KST 서울 성동구 상원길 26 밀크빌딩 지하1층 튜링의 사과";

async function loadDataUri(relativePath: string) {
  const buf = await readFile(join(process.cwd(), "public", relativePath));
  const ext = relativePath.split(".").pop();
  const mime =
    ext === "svg"
      ? "image/svg+xml"
      : ext === "jpg"
        ? "image/jpeg"
        : `image/${ext}`;
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function OgImage() {
  const [flake, nixHor, hackersLinear, ufo, hostAvatar, star] =
    await Promise.all([
      loadDataUri("nixos/flake.svg"),
      loadDataUri("nixos/horizontal.svg"),
      loadDataUri("hackers-public/linear-logo.svg"),
      loadDataUri("hackers-public/ufo.svg"),
      loadDataUri("profiles/bgl-gwyng.jpg"),
      loadDataUri("hackers-public/star.svg"),
    ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#000000",
        color: "white",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Flake stars - w-1/12 = 100px */}
      <img
        src={flake}
        style={{
          position: "absolute",
          width: 100,
          right: "10%",
          top: "10%",
        }}
      />
      <img
        src={flake}
        style={{
          position: "absolute",
          width: 100,
          left: "20%",
          top: "48%",
          transform: "rotate(-15deg)",
        }}
      />
      <img
        src={flake}
        style={{
          position: "absolute",
          width: 100,
          left: "40%",
          bottom: "15%",
          transform: "rotate(15deg)",
        }}
      />

      {/* Hackers' Public logo - w-1/2 = 600px */}
      <img
        src={hackersLinear}
        style={{
          position: "absolute",
          width: 600,
          left: "5%",
          top: "5%",
        }}
      />
      <img
        src={star}
        style={{
          position: "absolute",
          width: 50,
          right: "41%",
          top: "10%",
        }}
      />

      {/* PubNyan UFO - w-1/3 = 400px */}
      <img
        src={ufo}
        style={{
          position: "absolute",
          width: 400,
          right: "15%",
          top: "20%",
        }}
      />

      {/* Title - text-[4cqw] ≈ 48px, NixHor w-1/3 of w-1/2 = 200px */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          top: "25%",
          width: "50%",
          fontSize: 48,
          lineHeight: 1.2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>2026 </span>
          <img src={nixHor} style={{ width: 200, marginLeft: 8 }} />
          <span style={{ marginLeft: 8 }}>Workshop</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={nixHor} style={{ width: 200 }} />
          <span style={{ marginLeft: 8 }}>왜 안 쓰닋?</span>
        </div>
      </div>

      {/* Date & Location - text-[2.5cqw] ≈ 30px */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          bottom: "10%",
          width: "50%",
          fontSize: 30,
          lineHeight: 1.4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>2026년 04월 19일</span>
        <span>14:00~18:00 KST</span>
        <span>서울 성동구 상원길 26</span>
        <span>밀크빌딩 지하1층 튜링의 사과</span>
      </div>

      {/* Host - w-1/4 = 300px */}
      <img
        src={hostAvatar}
        style={{
          position: "absolute",
          right: "5%",
          bottom: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
        }}
      />
    </div>,
    { ...size },
  );
}
