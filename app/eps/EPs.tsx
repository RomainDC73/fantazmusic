import { Page } from "../components/page";
import ScrollIndicator from "~/components/ScrollIndicator";
import { Link } from "react-router";
import BackToHome from "~/components/BackToHome";

export default function EPs() {
  return (
    <Page theme="dark">
      <BackToHome />

      {/* Titre principal */}
      <h1 className="text-6xl font-bold text-center mt-20">Les EPs de FANTAZ</h1>

      <ScrollIndicator />

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
