import React from "react";
import heart from "../../../assets/heart.png";

const OpenSource = () => {
  return (
    <div className="w-full flex flex-col items-center mt-12 ">
      <div className="w-2xl flex flex-col items-center gap-2">
        <img
          src={heart}
          alt=""
          className="drop-shadow-[0_0_150px_rgba(255,0,0,0.6)] h-12"
        />
        <h1 className="font-[Inter] font-bold text-3xl p-2 text-white text-transparent bg-clip-text">
          Free & Open Source
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-lg mb-2">
          Nodemon is MIT Licensed and will always be free and open source. This
          is made possible by our contributors and these companies:
        </p>
      </div>
    </div>
  );
};

export default OpenSource;
