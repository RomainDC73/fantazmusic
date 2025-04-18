import type { Route } from "./+types/shows";
import Contact from "~/contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio - FANTAZ" },
    { name: "description", content: "Contact Fantaz" },
    { name: "keywords", content: "Fantaz, music, contact, artist, live, remix" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "EPs - FANTAZ" },
    { name: "og:description", content: "Contact Fantaz" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "/contact" },
    { name: "og:image", content: "/assets/og-image.jpg" },
    { name: "twitter:title", content: "Contact - FANTAZ" },
    { name: "twitter:description", content: "Get in touch and contact Fantaz" },
    { name: "twitter:image", content: "/assets/og-image.jpg" },
  ];
}

export default function ContactPage() {
  return <Contact />;
}