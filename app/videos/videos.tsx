import { Page } from "~/components/page";
import BackToHome from "~/components/BackToHome";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default function Videos() {
  const videos = [
    "91iKa61x51g",
    "98vJRyjxw1g",
    "VznBeBZBcjU",
  ];

  return (
    <Page theme="dark">
      <BackToHome />
      <Nav />

      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Videos</h1>
      </div>

      <div className="mt-40 px-4">
        <h2 className="text-2xl text-center mt-20 mb-10">
          Check out Fantaz' latest live footage videos here!
        </h2>

        <div className="flex flex-col items-center gap-8 w-full max-w-3xl mx-auto">
          {videos.map((id) => (
            <div
              key={id}
              className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Page>
  );
}
