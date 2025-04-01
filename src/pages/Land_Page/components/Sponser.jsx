import React from "react";
import { motion } from "framer-motion";

import one from "../../../assets/sponsers/1.png";
import two from "../../../assets/sponsers/2.png";
import three from "../../../assets/sponsers/3.png";
import four from "../../../assets/sponsers/4.png";
import five from "../../../assets/sponsers/5.png";
import six from "../../../assets/sponsers/6.png";
import seven from "../../../assets/sponsers/7.png";
import eight from "../../../assets/sponsers/8.png";
import nine from "../../../assets/sponsers/9.png";
import ten from "../../../assets/sponsers/10.png";

const sponsors = [one, two, three, four, five, six, seven, eight, nine, ten];

export default function SponsorsMarquee() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden py-6 mt-12 gap-14">
      {/* Marquee Wrapper */}
      <div className="w-full flex overflow-hidden relative">
        <motion.div
          className="flex gap-28 min-w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Duplicate logos to ensure seamless looping */}
          {[...sponsors, ...sponsors].map((logo, index) => (
            <img key={index} src={logo} alt="Sponsor" className="h-20 w-auto" />
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <button className="py-2 px-4 font-[Inter] text-white rounded-full border-[1px] border-zinc-900">
        Become A Sponsor
      </button>
    </div>
  );
}
