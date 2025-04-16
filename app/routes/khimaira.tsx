import type { Route } from "./+types/eps";
import Khimaira from "~/khimaira/khimaira";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Khimaira - FANTAZ" },
    { name: "description", content: "Khimaira, first album by Fantaz" },
  ];
}

export default function KhimairaPage() {
  return <Khimaira />;
}