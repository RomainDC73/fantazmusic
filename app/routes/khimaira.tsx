import type { Route } from "./+types/eps";
import Khimaira from "~/khimaira/khimaira";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Khimaira - FANTAZ" },
    { name: "description", content: "Khimaira, first album by Fantaz" },
    { name: "keywords", content: "Fantaz, music, electronic, global bass groove, album, Khimaira" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Khimaira - FANTAZ" },
    { name: "og:description", content: "Discover and listen to Fantaz' first album: Khimaira" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/khimaira" },
    { name: "og:image", content: "/assets/og-khimaira.jpg" },
    { name: "twitter:title", content: "Khimaira - FANTAZ" },
    { name: "twitter:description", content: "Discover and listen to Fantaz' first album: Khimaira" },
    { name: "twitter:image", content: "/assets/og-khimaira.jpg" },
  ];
}

export default function KhimairaPage() {
  return <Khimaira />;
}