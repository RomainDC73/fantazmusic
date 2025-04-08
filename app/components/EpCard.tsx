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
    <div className="flex flex-row w-full max-w-4xl mx-auto mt-12 p-4 gap-6">
      {/* Cover image */}
      <div className="w-1/3">
        <img
          src={cover}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
          style={{
            boxShadow: "-8px -8px var(--color-beige)",
          }}
        />
      </div>

      {/* Info and player */}
      <div className="w-2/3 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-[var(--color-beige)] font-thin italic opacity-70">{year}</p>

          <iframe
            className="rounded-lg"
            style={{ border: 0, width: "100%", height: 60 }}
            src={bandcampEmbedUrl}
            seamless
            title={`Lecteur Bandcamp - ${title}`}
          />
        </div>

        <a
          href={bandcampLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--color-green)] text-[var(--color-blue)] hover:brightness-110 transition w-auto self-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 18v-6a9 9 0 0118 0v6M3 18h3a1 1 0 001-1v-4a1 1 0 00-1-1H3m18 6h-3a1 1 0 01-1-1v-4a1 1 0 011-1h3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EpCard;
