import type { Route } from "./+types/shows";
import Shows from "~/shows/Shows";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shows - FANTAZ" },
    { name: "description", content: "Live gigs or DJ sets, catch Fantaz on tour near your cities" },
  ];
}

export default function ShowsPage() {
  return <Shows />;
}