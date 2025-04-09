import { Page } from "../components/page";
import Nav from "~/components/Nav";
import BackToHome from "~/components/BackToHome";
import EpCard from "~/components/EpCard";
import { eps } from "~/data/eps";

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Header block to go back to home page */}
      <BackToHome />
      <Nav />
      {/* H1 Title */}
      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">
          EPs
        </h1>
      </div>

      {/* EPs Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-40 mb-20">
        {eps.map((ep) => (
          <EpCard key={ep.title} {...ep} />
        ))}
      </div>
    </Page>
  );
}
