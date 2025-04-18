import type { Route } from "./+types/home";
import Welcome from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fantaz" },
    { name: "description", content: "Welcome to Fantaz' website! | Music, Radioshow, Events and more" },
    { name: "keywords", content: "Fantaz, music, electronic, global bass groove, artist, releases, albums, radioshow" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Welcome - FANTAZ" },
    { name: "og:description", content: "Welcome on Fantaz website to discover his music and radioshow" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/" },
    { name: "og:image", content: "/assets/og-image.jpg" },
    { name: "twitter:title", content: "Welcome - FANTAZ" },
    { name: "twitter:description", content: "Welcome on Fantaz website to discover his music and radioshow" },
    { name: "twitter:image", content: "/assets/og-image.jpg" },
  ];
}

export default function Home() {
  return <Welcome />;
}
