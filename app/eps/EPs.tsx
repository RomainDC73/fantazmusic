import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import { Link } from "react-router";

export default function EPs() {
  return (
    <Page theme="dark">
      {/* Bloc Fantaz + Flèche alignée à gauche */}
      <div className="absolute top-5 left-5 flex flex-col items-start space-y-2">
        {/* Texte Fantaz */}
        <Link to="/" className="text-3xl font-light tracking-wide">
          Fantaz
        </Link>

        {/* Flèche sous Fantaz */}
        <Link to="/" className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-[1.5]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path> {/* Flèche vers la gauche */}
          </svg>
        </Link>
      </div>

      {/* Titre principal */}
      <h1 className="text-6xl font-bold text-center mt-20">Les EPs de FANTAZ</h1>

      <ScrollIndicator theme="light" />

      {/* Contenu de la page */}
      <div className="mt-10 flex flex-col items-center space-y-8">
        <div className="w-3/4 md:w-1/2 p-5 bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg">
          <h2 className="text-3xl font-semibold">EP 1 - Nom de l'EP</h2>
          <p>Sortie : 2024</p>
        </div>

        <div className="w-3/4 md:w-1/2 p-5 bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg">
          <h2 className="text-3xl font-semibold">EP 2 - Autre EP</h2>
          <p>Sortie : 2023</p>
        </div>
      </div>
    </Page>
  );
}
