import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import BackToHome from "~/components/BackToHome";

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Bloc "Fantaz" avec la flèche */}
      <BackToHome />

      {/* Titre principal dans un bloc style "justifié à gauche", sous BackToHome */}
      <div className="relative w-full md:w-1/2 p-5 bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg mt-20 transform rotate-[-5deg] left-0 overflow-hidden">
        <h1 className="text-5xl font-bold text-left transform rotate-[0deg]">
          EPs
        </h1>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Contenu de la page */}
    </Page>
  );
}
