const hostUrl = "https://api.github.com/users/bglgwyng";

const fallback = {
  avatar_url: "/profiles/bgl-gwyng.jpg",
  name: "bglgwyng",
  url: "https://github.com/bglgwyng",
};

async function fetchInfo() {
  try {
    const res = await fetch(hostUrl, { next: { revalidate: 86400 } });
    const data = await res.json();
    return {
      avatar_url: data.avatar_url as string,
      name: data.name as string,
      url: data.html_url as string,
    };
  } catch {
    return fallback;
  }
}

export default async function Bglgwyng({
  className,
}: {
  className?: string;
}) {
  const info = await fetchInfo();
  return (
    <a href={info.url} target="_blank" rel="noopener noreferrer">
      <img src={info.avatar_url} alt={info.name} className={className} />
    </a>
  );
}
