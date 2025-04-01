import React from "react";
import heart from "../../../assets/heart.png";

const OpenSource = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12 px-4">
      <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
        <img
          src={heart}
          alt="Heart"
          className="drop-shadow-[0_0_150px_rgba(255,0,0,0.6)] h-12 sm:h-16 md:h-20"
        />
        <h1 className="font-[Inter] font-bold text-3xl sm:text-4xl md:text-5xl p-2 text-white bg-clip-text text-center">
          Free & Open Source
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-lg sm:text-xl md:text-2xl mb-4">
          Nodemon is MIT Licensed and will always be free and open source. This
          is made possible by our contributors and these companies:
        </p>
      </div>
    </div>
  );
};

export default OpenSource;
