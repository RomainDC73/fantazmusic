import { Page } from "../components/page";

export default function Welcome() {
  return (
    <Page theme="dark">
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ
      </h1>

      {/* Bloc gauche */}
      <div className="absolute left-0 top-[120vh] w-1/4 h-48 bg-pink-500"></div>

      {/* Bloc droit */}
      <div className="absolute right-0 top-[120vh] w-1/4 h-48 bg-blue-500"></div>

      {/* Contenu pour permettre le scroll */}
      <div className="h-[200vh]"></div>
    </Page>
  );
}
