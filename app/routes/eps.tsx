import type { Route } from "./+types/eps";
import EPs from "~/eps/EPs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPs - FANTAZ" },
    { name: "description", content: "Discover all EPs released by Fantaz" },
    { name: "keywords", content: "EPs, Fantaz, music, releases, Climax, Roll Out, Mirrors, Une Pour Tony, Hindiriddims" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "EPs - FANTAZ" },
    { name: "og:description", content: "Discover all EPs released by Fantaz" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/eps" },
    { name: "og:image", content: "/assets/og-image.jpg" },
    { name: "twitter:title", content: "EPs - FANTAZ" },
    { name: "twitter:description", content: "Discover all EPs released by Fantaz" },
    { name: "twitter:image", content: "/assets/og-image.jpg" },
  ];
}

export default function EPsPage() {
  return <EPs />;
}