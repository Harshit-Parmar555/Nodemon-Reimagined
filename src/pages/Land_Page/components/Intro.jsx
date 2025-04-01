import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../../../custom/FeatureCard";

const features = [
  {
    heading: "Automatic Restart on Code Changes",
    para: "Nodemon watches for file changes in your project and automatically restarts the server whenever you update the code. This eliminates the need for manual restarts, making development smoother and more efficient.",
  },
  {
    heading: "Increased Developer Productivity",
    para: "By reducing the hassle of stopping and restarting the server manually, Nodemon saves valuable time. Developers can focus on writing and testing code without interruptions, leading to a faster development cycle.",
  },
  {
    heading: "Cross-Platform Support",
    para: "Nodemon works seamlessly on Windows, macOS, and Linux, ensuring compatibility across different operating systems. This makes it a reliable tool for teams working in diverse environments.",
  },
  {
    heading: "Custom Script Execution",
    para: "Developers can configure Nodemon to run custom scripts before or after restarting the server. This is useful for running database migrations, clearing cache, or executing other necessary tasks automatically.",
  },
  {
    heading: "Works with Any Node.js Application",
    para: "Nodemon is framework-agnostic and supports any Node.js project, whether it’s an API, a web server, or a CLI tool. It integrates easily with Express.js, Fastify, NestJS, and other Node-based frameworks.",
  },
];

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-auto flex flex-col gap-12 items-center mt-24 px-4 sm:px-6 md:px-8"
    >
      {/* Heading Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center sm:items-end gap-2 text-center"
      >
        <h1 className="font-[Inter] font-bold text-2xl sm:text-3xl p-2 text-white bg-clip-text">
          What is Nodemon?
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-sm sm:text-lg mb-2">
          Nodemon auto-restarts your Node.js app on file changes 🚀
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
          },
        }}
        className="w-full max-w-7xl flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            heading={feature.heading}
            para={feature.para}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Intro;
