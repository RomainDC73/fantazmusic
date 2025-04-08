import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import BackToHome from "~/components/BackToHome";
import EpCard from "~/components/EpCard";

const eps = [
  {
    title: "Mirrors",
    year: "2023",
    cover: "https://f4.bcbits.com/img/a0940520493_16.jpg",
    bandcampEmbedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2046215295/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/",
    bandcampLink: "https://fantaz.bandcamp.com/album/premier-ep"
  },
  {
    title: "Mirrors",
    year: "2023",
    cover: "https://f4.bcbits.com/img/a0940520493_16.jpg",
    bandcampEmbedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2046215295/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/",
    bandcampLink: "https://fantaz.bandcamp.com/album/premier-ep"
  },
  {
    title: "Mirrors",
    year: "2023",
    cover: "https://f4.bcbits.com/img/a0940520493_16.jpg",
    bandcampEmbedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2046215295/size=small/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/",
    bandcampLink: "https://fantaz.bandcamp.com/album/premier-ep"
  },
  // Ajoute ici les 3 autres disques
];

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Header block to go back to home page */}
      <BackToHome />

      {/* H1 Title */}
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

      {/* EPs Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-40">
        {eps.map((ep) => (
          <EpCard key={ep.title} {...ep} />
        ))}
      </div>
    </Page>
  );
}
