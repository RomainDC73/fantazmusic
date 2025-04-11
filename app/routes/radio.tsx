import type { Route } from "./+types/shows";
import Radio from "~/radio/radio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio - FANTAZ" },
    { name: "description", content: "Global Bazar! Radioshow by Fantaz" },
  ];
}

export default function ShowsPage() {
  return <Radio />;
}