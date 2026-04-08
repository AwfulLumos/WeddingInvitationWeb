import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Countdown } from "./components/Countdown";
import { EventDetails } from "./components/EventDetails";
import { Timeline } from "./components/Timeline";
import { Accommodations } from "./components/Accommodations";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { RSVP } from "./components/RSVP";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#A98B76] focus:text-white focus:rounded">
        Skip to main content
      </a>
      <Navigation />
      <Hero />
      <main id="main-content">
        <div id="our-story">
          <OurStory />
        </div>
        <div id="countdown">
          <Countdown />
        </div>
        <div id="details">
          <EventDetails />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
        <div id="accommodations">
          <Accommodations />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="rsvp">
          <RSVP />
        </div>
      </main>
      <Footer />
    </div>
  );
}