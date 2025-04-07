import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import BackToHome from "~/components/BackToHome";
import EpCard from "~/components/EpCard";

const eps = [
  {
    title: "Premier EP",
    year: "2020",
    cover: "/covers/premier-ep.jpg",
    bandcampEmbedUrl: "https://bandcamp.com/EmbeddedPlayer/album=123456789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/",
    bandcampLink: "https://fantaz.bandcamp.com/album/premier-ep"
  },
  // ... 4 autres disques ici
];

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Bloc "Fantaz" avec la flèche */}
      <BackToHome />

      {/* Titre principal dans un petit bloc incliné, collé à gauche */}
      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">
          EPs
        </h1>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
      {eps.map((ep) => (
  <EpCard key={ep.title} {...ep} />
))}
      {/* Contenu de la page */}
    </Page>
  );
}
