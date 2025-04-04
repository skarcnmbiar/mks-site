"use client";

import "@/app/globals.css";
import SocialTray from "./social-tray";
import ScrollAnimatedContainer from "./scroll-animation";

export default function Header({ imageUrl }) {
  return (
    <div
      className=" main-header relative h-[80vh] flex flex-col bg-background overflow-hidden inset-shadow-2xs"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <input
          type="text"
          placeholder="Enter your text here"
          className="ps-3 px:20 sm:px-40 sm:ps-3 py-3 bg-white/50  text-black text-sm border-0 focus:outline-none rounded-l-md  backdrop-filter backdrop-blur-sm"
        />
        <button
          type="button"
          className="p-3 bg-accent text-foreground text-sm rounded-r-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-foreground"
        >
          Search
        </button>
      </div>
      <ScrollAnimatedContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        options={{ threshold: 0.5 }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <SocialTray />
        </div>
      </ScrollAnimatedContainer>
    </div>
  );
}
