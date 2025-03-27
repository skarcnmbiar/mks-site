"use client";

import "@/app/globals.css";

export default function Header() {
  return (
    <div className="relative h-[80vh] flex flex-col main-header bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <input
          type="text"
          placeholder="Enter your text here"
          className="ps-3 p-3 bg-input text-primary text-sm border-0 focus:outline-none rounded-l-md focus:ring-2 focus:ring-foreground"
        />
        <button
          type="button"
          className="p-3 bg-accent text-primary text-sm rounded-r-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-foreground"
        >
          Search
        </button>
      </div>

      {/* Text at the Bottom */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-primary text-[14px]">
          <i>
            “The blood of a warrior is closer to God, <br />
            than the ink of the philosopher or prayers of the Devout.”
          </i>
        </p>
      </div>
    </div>
  );
}
