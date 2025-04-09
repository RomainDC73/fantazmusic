import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";

export default function Videos() {
    return (
        <Page theme="dark">
        <BackToHome />
        <div
            className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
            style={{ width: "max-content" }}
        >
            <h1 className="text-4xl font-bold rotate-[5deg]">
                Videos
            </h1>
        </div>
    
        <div className="mt-20 px-4">
            <h2 className="text-2xl text-center mt-20 mb-10">
            Live set or DJ gigs by Fantaz
            </h2>
        </div>
        </Page>
    );
    }
