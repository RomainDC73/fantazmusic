import { Page } from "../components/page"
import { ScrollingLinks } from "~/components/scrolling-links"

export default function Home() {
  return (
    <Page theme="dark">
      {/* Titre fixe */}
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ
      </h1>

      {/* Composant ScrollingLinks */}
      <ScrollingLinks />
    </Page>
  )
}
