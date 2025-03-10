import { Calendar } from "lucide-react";

const Events = () => {
  return (
    <div className="w-full flex flex-wrap justify-between pt-20 px-20 min-h-screen">
      {/* EventsMiniNav */}
      <div className="w-full flex">
        <div className="w-3/5 flex justify-end">
          <h2 className="font-bold text-5xl">EVENTS</h2>
        </div>
        <div className="w-2/5 flex justify-end items-center">
          <Calendar className="w-10 h-10 text-gray-500" />
        </div>
      </div>

      {/* Events Items */}
      <div className="w-full flex justify-center items-center mt-20">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Events Coming Soon
          </h3>
          <p className="text-white text-lg">
            We're preparing some exciting events. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
