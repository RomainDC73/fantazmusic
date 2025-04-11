import type { Route } from "./+types/shows";
import Contact from "~/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio - FANTAZ" },
    { name: "description", content: "Contact Fantaz" },
  ];
}

export default function ContactPage() {
  return <Contact />;
}