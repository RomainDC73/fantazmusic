import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import { useEffect } from "react";

export default function Radio() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://player.ausha.co/ausha-player.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

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
        {/* Ausha Player Ausha */}
        <div className="w-full">
          <iframe
            name="Ausha Podcast Player"
            frameBorder="0"
            loading="lazy"
            id="ausha-YW8R"
            height="420"
            style={{ border: "none", width: "100%", height: "420px" }}
            src="https://player.ausha.co/?showId=ZGQgYiGmGwpM&color=%23C5D86D&playlist=true&dark=true&v=3&playerId=ausha-YW8R"
          ></iframe>
        </div>
        </div>
    <Footer />
    </Page>
  );
}