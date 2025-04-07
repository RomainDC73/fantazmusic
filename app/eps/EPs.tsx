import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import BackToHome from "~/components/BackToHome";

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Bloc "Fantaz" avec la flèche */}
      <BackToHome />

      {/* Titre principal dans un petit bloc incliné, collé à gauche */}
      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">
          EPs
        </h1>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Contenu de la page */}
    </Page>
  );
}
