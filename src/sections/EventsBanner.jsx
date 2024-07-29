import EventCard from "@/components/EventCard";
import React from "react";

export default function EventsBanner() {
  return (
    <section className="relative py-20 2xl:py-40 bg-blue-100 overflow-hidden px-10">
      <div className="container px-4 mx-auto">
        <div className="mb-14 text-center">
          <span className="text-lg text-gray-400 font-bold">
            What&apos;s new at SPICE ENTERTAINMENT
          </span>
          <h2 className="mt-8 text-5xl font-bold font-heading text-gray-700">
            Latest & Upcoming Events
          </h2>
        </div>
        <div className="flex flex-wrap -m-6">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="mt-14 lg:mt-24 text-center">
          <a
            className="inline-block py-5 px-10 mr-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200 uppercase"
            href="#"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
}
