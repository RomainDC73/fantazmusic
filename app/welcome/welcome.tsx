import { Page } from "../components/page";
import { Link } from "react-router";

export default function Welcome() {
  return (
    <Page theme="dark">
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ
      </h1>

      {/* Conteneur avec grande hauteur pour permettre le scroll */}
      <div className="relative h-[300vh] w-full">

        {/* Bloc EPs (gauche) */}
        <Link to="/eps" className="absolute left-0 top-[100vh] w-1/4 h-48 bg-pink-500 flex items-center justify-center text-white text-2xl font-bold">
          EPs
        </Link>

        {/* Bloc Shows (droite) */}
        <Link to="/shows" className="absolute right-0 top-[100vh] w-1/4 h-48 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
          Shows
        </Link>

        {/* Bloc Videos (droite, sous Shows) */}
        <Link to="/videos" className="absolute right-0 top-[115vh] w-1/4 h-48 bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
          Videos
        </Link>

      </div>
    </Page>
  );
}
