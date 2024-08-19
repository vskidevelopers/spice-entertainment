import eventImage from "../assets/images/infamous.jpeg";

export default function EventCard() {
  return (
    <div className="relative w-full lg:w-1/3 p-6">
      <div className="relative z-10 bg-gray-700 rounded-lg">
        <div className="relative mb-8 h-52">
          <img
            className="w-full h-full rounded-lg object-cover object-top"
            src={eventImage}
            height="300"
            width="500"
            alt=""
          />
          <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
            <p className="text-xl font-bold">30</p>
            <p className="text-xs uppercase text-gray-300">Feb</p>
          </div>
        </div>
        <div className="px-14 pb-10">
          <a
            className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
            href="#"
          >
            Catch us live on this event
          </a>
        </div>
      </div>
    </div>
  );
}
