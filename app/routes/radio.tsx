import type { Route } from "./+types/shows";
import Radio from "~/radio/radio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio - FANTAZ" },
    { name: "description", content: "Global Bazar! Radioshow by Fantaz" },
    { name: "keywords", content: "Fantaz, music, electronic, global bass groove, DJ mix, radioshow, Global Bazar, podcast, Radio Ellebore, Nebulah Radio" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Global Bazar Radioshow! - FANTAZ" },
    { name: "og:description", content: "Listen to Fantaz' monthly radioshow: Global Bazar!" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/radio" },
    { name: "og:image", content: "/assets/og-radio.jpg" },
    { name: "twitter:title", content: "Global Bazar! Radioshow - FANTAZ" },
    { name: "twitter:description", content: "Listen to Fantaz' monthly radioshow: Global Bazar!" },
    { name: "twitter:image", content: "/assets/og-radio.jpg" },
  ];
}

export default function RadioPage() {
  return <Radio />;
}