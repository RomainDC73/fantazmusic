import type { Route } from "./+types/shows";
import Shows from "~/shows/shows";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shows - FANTAZ" },
    { name: "description", content: "Live gigs or DJ sets, catch Fantaz on tour near your cities" },
    { name: "keywords", content: "Fantaz, music, electronic, global bass groove, DJ sets, Live sets, gigs, shows" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Shows - FANTAZ" },
    { name: "og:description", content: "See Fantaz live on DJ sets or live gigs in a city near you" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/shows" },
    { name: "og:image", content: "/assets/og-image.jpg" },
    { name: "twitter:title", content: "Shows - FANTAZ" },
    { name: "twitter:description", content: "See Fantaz live on DJ sets or live gigs in a city near you" },
    { name: "twitter:image", content: "/assets/og-image.jpg" },
  ];
}

export default function ShowsPage() {
  return <Shows />;
}