import { Page } from "../components/page";
import BackToHome from "~/components/BackToHome";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default function Contact() {
  
  return (
    <Page theme="dark">
      <BackToHome />
      <Nav />

      <div
        className="absolute top-[120px] -left-5 rotate-[-5deg] bg-[var(--color-green)] text-[var(--color-blue)] rounded-lg px-10 py-3"
        style={{ width: "max-content" }}
      >
        <h1 className="text-4xl font-bold rotate-[5deg]">Contact</h1>
      </div>

      <div className="mt-40 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl text-center mt-20 mb-10">
          Let's get in touch!
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="flex-1 p-3 rounded-lg bg-white text-black placeholder-gray-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="flex-1 p-3 rounded-lg bg-white text-black placeholder-gray-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[var(--color-green)] text-[var(--color-blue)] font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </form>
      </div>

      <Footer />
    </Page>
  );
}
