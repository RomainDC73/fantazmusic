import { useEffect, useRef } from "react";
import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";

export default function Shows() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgetv3.bandsintown.com/main.min.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  return (
    <Page theme="light">
      {/* Header block to go back to home page */}
      <BackToHome />

      {/* H1 Title */}
      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Shows</h1>
      </div>

      {/* Widget container */}
      <div className="mt-60 px-4" ref={widgetRef}>
        <a
          className="bit-widget-initializer"
          data-follow-section-position="hidden"
          data-artist-name="id_8186675"
          data-background-color="rgba(197,216,109,1)"
          data-separator-color="rgba(13,19,33,1)"
          data-text-color="rgba(13,19,33,1)"
          data-font="Kanit"
          data-auto-style="true"
          data-display-past-dates="true"
          data-display-limit="all"
          data-date-format="MMM. DD YYYY"
          data-date-orientation="vertical"
          data-date-border-color="#4A4A4A"
          data-date-border-width="1px"
          data-date-border-radius="10px"
          data-date-capitalization="capitalize"
          data-event-ticket-text="TICKETS"
          data-event-ticket-cta-position="hidden"
          data-event-ticket-cta-text-color="rgba(255,255,255,1)"
          data-event-ticket-cta-bg-color="rgba(197,216,109,0)"
          data-event-ticket-cta-border-color="rgba(197,216,109,0)"
          data-language="en"
          data-bit-logo-position="hidden"
          data-play-my-city-position="hidden"
          data-social-share-icon="false"
          data-event-rsvp-position="hidden"
          
          
        ></a>
      </div>
    </Page>
  );
}
