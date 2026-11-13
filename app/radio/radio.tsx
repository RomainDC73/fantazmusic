import { Page } from "~/components/page";
import BackToHome from "~/components/BackToHome";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default function Radio() {
  return (
    <Page theme="light">
      <BackToHome />
      <Nav />

      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Radioshow</h1>
      </div>

      <div className="mt-40 px-4">
        <h2 className="text-2xl text-center mt-20 mb-10">
          Global Bazar! is Fantaz' monthly radioshow
        </h2>
        {/* Acast Player */}
        <div className="w-full">
          <iframe
            title="Global Bazar! sur Acast"
            src="https://embed.acast.com/6a189ded847a83997eb8fd00?theme=light&feed=true"
            frameBorder="0"
            loading="lazy"
            style={{ border: "none", width: "100%", height: "630px" }}
          ></iframe>
        </div>
      </div>
      <Footer />
    </Page>
  );
}