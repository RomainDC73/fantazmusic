import { useEffect, useState } from "react";
import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";

export default function Shows() {
  interface Event {
    id: string;
    venue: {
      name: string;
      city: string;
      country: string;
    };
    datetime: string;
    offers?: { url: string }[];
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

      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-blue)] text-[var(--color-green)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Shows</h1>
      </div>
      <div>

      </div>
        

      <div className="mt-20 px-4">
      <h2 className="text-2xl text-center mt-20 mb-10">
        Upcoming live gigs and DJ sets near you!
        </h2>
        {loading ? (
          <p className="text-gray-500">Chargement des concerts...</p>
        ) : events.length === 0 ? (
          <p className="text-gray-700">Pas de concerts à venir.</p>
        ) : (
          <ul className="space-y-6">
            {events.map((event) => (
              <li key={event.id} className="border border-gray-300 p-4 rounded-xl shadow-sm">
                <div className="text-xl font-semibold">{event.venue.name}</div>
                <div className="text-gray-600">
                  {new Date(event.datetime).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="text-sm text-gray-500">
                  {event.venue.city}, {event.venue.country}
                </div>
                {(event.offers?.length ?? 0) > 0 && event.offers[0]?.url && (
                  <a
                    href={event.offers?.[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-[var(--color-green)] text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Billets
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Page>
  );
}
