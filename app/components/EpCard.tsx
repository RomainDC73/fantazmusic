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
    <div className="flex flex-col md:flex-row items-start bg-[var(--color-beige)] text-[var(--color-blue)] p-4 rounded-xl shadow-md gap-4 w-full max-w-3xl mx-auto mt-12">
      <img src={cover} alt={title} className="w-32 h-32 object-cover rounded-lg" />

      <div className="flex-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-700 mb-2">{year}</p>

        {/* Bandcamp player */}
        <iframe
          style={{ border: 0, width: "100%", height: 120 }}
          src={bandcampEmbedUrl}
          seamless
          title={`Lecteur Bandcamp - ${title}`}
        >
          <a href={bandcampLink}>Listen on Bandcamp</a>
        </iframe>

        <a
          href={bandcampLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm underline hover:text-[var(--color-green)] transition"
        >
          Écouter / Acheter sur Bandcamp →
        </a>
      </div>
    </div>
  );
};

export default EpCard;
