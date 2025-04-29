import { useState } from "react";
import { Page } from "~/components/page";
import Nav from "~/components/Nav";
import BackToHome from "~/components/BackToHome";
import Footer from "~/components/Footer";

export default function Khimaira() {
  const [loading, setLoading] = useState(true);

  return (
    <Page theme="dark">
      <BackToHome />
      <Nav />

      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Khimaira</h1>
      </div>

      <div className="mt-60 px-4 max-w-3xl mx-auto text-center">
        <p className="text-xl font-thin">
          <b>Khimaira</b> is Fantaz' first full-length album.
        </p>
        <p className="text-lg font-thin mb-10">
          Available on vinyl and digital platforms, April 25th, 2025.
        </p>

        <div className="mb-12">
          <img
            src="/assets/Fantaz_Khimaira_Vinyl_Cover_low.png"
            alt="Khimaira album cover"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg mx-auto"
          />
        </div>

        {loading && (
          <div className="flex justify-center items-center mb-8 space-x-2">
            <svg
              className="animate-spin h-6 w-6 text-[var(--color-beige)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <path d="M2 12a10 10 0 1 1 20 0" />
            </svg>
            <p className="font-thin text-sm">Loading Bandcamp player…</p>
          </div>
        )}

        <div className="mb-12 flex justify-center">
          <iframe
            style={{ border: "0", width: "100%", height: "472px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1353007484/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/"
            seamless
            className="rounded-2xl"
            onLoad={() => setLoading(false)}
            title="Khimaira Bandcamp Player"
          >
            <a href="https://fantaz.bandcamp.com/album/khimaira">Khimaira by Khimaira</a>
          </iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="https://fantaz.bandcamp.com/album/khimaira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy the Khimaira album on Bandcamp"
            className="bg-[var(--color-green)] text-[var(--color-blue)] font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Buy the vinyl
          </a>
          <a
            href="http://li.sten.to/fantaz_khimaira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen to the Khimaira album on your favorite platform"
            className="bg-[var(--color-green)] text-[var(--color-blue)] font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Listen
          </a>
        </div>
      </div>

      <Footer />
    </Page>
  );
}
