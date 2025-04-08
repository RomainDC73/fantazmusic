import type { Route } from "./+types/videos";
import Videos from "~/videos/Videos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Videos - FANTAZ" },
    { name: "description", content: "Videos of live set or DJ gigs by Fantaz" },
  ];
}

export default function VideosPage() {
  return <Videos />;
}