import type { Route } from "./+types/eps";
import EPs from "~/eps/eps";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPs - FANTAZ" },
    { name: "description", content: "Discover all EPs released by Fantaz" },
  ];
}

export default function EPsPage() {
  return <EPs />;
}