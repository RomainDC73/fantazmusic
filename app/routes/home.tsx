import type { Route } from "./+types/home";
import Welcome from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fantaz" },
    { name: "description", content: "Welcome to Fantaz' website! | Music, Radioshow, Events and more" },
  ];
}

export default function Home() {
  return <Welcome />;
}
