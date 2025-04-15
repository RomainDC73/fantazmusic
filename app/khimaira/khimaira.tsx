import { Page } from "../components/page";
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

      <div className="mt-40 px-4 max-w-3xl mx-auto text-center">
        <p className="text-xl mb-10">
          🎵 *Khimaira* est le tout premier album de Fantaz. Une exploration
          sonore entre ombre et lumière, puissance et mélodie.
        </p>

        <div className="mb-12">
          <img
            src="https://f4.bcbits.com/img/a2597314292_16.jpg"
            alt="Khimaira album cover"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg mx-auto"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="https://open.spotify.com/album/..."
            target="_blank"
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Écouter sur Spotify
          </a>
          <a
            href="https://music.apple.com/album/..."
            target="_blank"
            className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Apple Music
          </a>
          <a
            href="https://www.deezer.com/album/..."
            target="_blank"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Deezer
          </a>
          <a
            href="https://www.youtube.com/playlist?list=..."
            target="_blank"
            className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            YouTube
          </a>
        </div>
      </div>

      <Footer />
    </Page>
  );
}
