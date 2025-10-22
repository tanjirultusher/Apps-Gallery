import React from "react";
import { Download, Star, Play } from "lucide-react";

function Trusted() {
  return (
    <section className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Trusted by Millions, Built for You
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-extrabold">29.6M</span>
            <Download className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <p className="text-md md:text-lg mt-2 font-medium">Total Downloads</p>
          <p className="text-xs md:text-sm mt-1 opacity-80">
            21% more than last month
          </p>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-extrabold">906K</span>
            <Star className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <p className="text-md md:text-lg mt-2 font-medium">Total Reviews</p>
          <p className="text-xs md:text-sm mt-1 opacity-80">
            46% more than last month
          </p>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-extrabold">132+</span>
            <Play className="w-7 h-7 md:w-8 md:h-8" />
          </div>
          <p className="text-md md:text-lg mt-2 font-medium">Active Apps</p>
          <p className="text-xs md:text-sm mt-1 opacity-80">
            31 more will launch
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
