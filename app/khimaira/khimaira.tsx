import { Page } from "../components/Page";
import Nav from "~/components/Nav";
import BackToHome from "~/components/BackToHome";
import Footer from "~/components/Footer";

export default function Khimaira() {
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
          "Khimaira" is Fantaz' first full-length album.
        </p>
        <p className="text-sm font-thin mb-10">
          Available on vinyl and digital platforms.
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
        <div className="mb-12 flex justify-center">
            <iframe
                style={{ border: "0", width: "100%", height: "472px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1353007484/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=none/transparent=true/"
                seamless
                className="rounded-lg"
            >
                <a href="https://fantaz.bandcamp.com/album/khimaira">Khimaira by Khimaira</a>
            </iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="https://fantaz.bandcamp.com/album/khimaira"
            target="_blank"
            className="bg-[var(--color-green)] text-[var(--color-blue)] font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Buy the album
          </a>
          <a
            href="https://music.apple.com/album/..."
            target="_blank"
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
