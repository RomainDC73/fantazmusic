import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";

export default function Shows() {
    return (
      <Page theme="light">
        {/* Header block to go back to home page */}
        <BackToHome />
  
        {/* H1 Title */}
        <div
          className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
          style={{ width: "max-content" }}
        >
          <h1 className="text-4xl font-bold rotate-[5deg]">
            Shows
          </h1>
        </div>

      </Page>
    );
  }