import { Page } from "../components/page";
import Rotate from "~/components/animatedBlock";

export default function Welcome() {
  return (
    <Page theme="dark">
      <Rotate>
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ
      </h1>
      </Rotate>
     

    </Page>
  );
}
