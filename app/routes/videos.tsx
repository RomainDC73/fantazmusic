import type { Route } from "./+types/shows";
import Videos from "~/videos/videos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Videos - FANTAZ" },
    { name: "description", content: "Latest Videos by Fantaz" },
    { name: "keywords", content: "Fantaz, music, electronic, global bass groove, live videos, performance, live music, drums, finger drumming" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Videos - FANTAZ" },
    { name: "og:description", content: "Latest live videos by Fantaz" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/videos" },
    { name: "og:image", content: "/assets/og-videos.jpg" },
    { name: "twitter:title", content: "Videos - FANTAZ" },
    { name: "twitter:description", content: "Latest Videos by Fantaz" },
    { name: "twitter:image", content: "/assets/og-videos.jpg" },
  ];
}

export default function VideosPage() {
  return <Videos />;
}