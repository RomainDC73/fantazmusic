import type { FC } from "react";

type EpCardProps = {
  title: string;
  year: string;
  cover: string;
  bandcampEmbedUrl: string;
  bandcampLink: string;
};

const EpCard: FC<EpCardProps> = ({ title, year, cover, bandcampEmbedUrl, bandcampLink }) => {
  return (
    <div className="flex flex-row w-full max-w-4xl mx-auto mt-12 p-4 rounded-xl shadow-md gap-6">
      
      {/* Image à gauche */}
      <div className="w-1/3">
        <img
          src={cover}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Contenu à droite */}
      <div className="w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-[var(--color-beige)] opacity-70 mb-3">{year}</p>

          <iframe
            style={{ border: 0, width: "100%", height: 120 }}
            src={bandcampEmbedUrl}
            seamless
            title={`Lecteur Bandcamp - ${title}`}
          />
        </div>

        <a
          href={bandcampLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm underline hover:text-[var(--color-green)] transition"
        >
          Écouter / Acheter sur Bandcamp →
        </a>
      </div>
    </div>
  );
};

export default EpCard;
