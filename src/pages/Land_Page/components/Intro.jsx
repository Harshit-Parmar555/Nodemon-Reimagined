import React from "react";

import FeatureCard from "../../../custom/FeatureCard";
const Intro = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-12 items-center mt-12">
      <div className="flex items-end gap-1">
        <h1 className="font-[Inter] font-bold text-3xl p-2 text-white text-transparent bg-clip-text">
          What is Nodemon ?
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-lg mb-2">
          Nodemon auto-restarts your Node.js app on file changes 🚀
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-8">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Intro;
