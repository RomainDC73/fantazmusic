import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import BackToHome from "~/components/BackToHome";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default function Shows() {
  interface Event {
    id: string;
    venue: {
      name: string;
      city: string;
      country: string;
    };
    datetime: string;
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rest.bandsintown.com/artists/fantaz/events/?app_id=890bed3984f8a4f3b9736595c404994d")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de récupération des events :", err);
        setLoading(false);
      });
  }, []);

  return (
    <Page theme="light">
      <BackToHome />
      <Nav />
      
      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Shows</h1>
      </div>

      <div className="mt-40 px-4">
        <h2 className="text-2xl text-center mt-20 mb-10">
          Upcoming live gigs <br/>and DJ sets near you!
        </h2>

        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="animate-spin h-8 w-8 text-[var(--color-blue)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
              <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" fill="none"></path>
            </svg>
            <p className="font-thin">Loading...</p>
          </div>
        ) : events.length === 0 ? (
          <p className="font-normal">No gigs announced for now... 🤷</p>
        ) : (
          <ul className="space-y-6">
            {events.map((event) => (
              <li key={event.id} className="border border-[var(--color-blue)] p-4 rounded-lg shadow-sm">
                <div className="text-lg font-thin italic">
                  {new Date(event.datetime).toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="text-lg font-semibold">
                  {event.venue.city}, {event.venue.country}
                </div>
                <div className="text-lg font-normal">{event.venue.name}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />

    </Page>
  );
}
