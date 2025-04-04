import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Check, Clipboard, ArrowRight } from "lucide-react";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g nodemon";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-auto overflow-hidden flex flex-col items-center mt-36 md:mt-48 gap-8"
    >
      {/* Animated Welcome Button */}
      <button className="flex items-center border-[1px] border-zinc-800 rounded-full py-1 px-4 text-sm text-white">
        ✨ Welcome to Nodemon <ArrowRight />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-center gap-2"
      >
        <h1 className="font-[Urbanist] font-medium text-center text-4xl md:text-6xl p-2 bg-gradient-to-t from-zinc-800 to-white text-transparent bg-clip-text">
          Auto-restarting Node.js apps made easy
        </h1>
        <p className="w-[90%]  md:w-2xl text-center font-[Inter] text-zinc-400 text-sm md:text-base">
          "Nodemon watches your files and auto-restarts your Node.js app on
          changes, making development faster and hassle-free."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-4 p-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-200 text-black text-sm font-medium rounded-lg shadow-md hover:bg-gray-300 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg shadow-md border-[1px] border-zinc-800 transition"
          >
            <Github size={20} /> GitHub
          </motion.button>
        </div>

        {/* Command Copy Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 text-white p-3 rounded-lg relative group cursor-pointer bg-[#0a0a0a]"
        >
          <code className="text-sm text-zinc-400">{command}</code>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="p-2 transition-opacity duration-300 cursor-pointer"
          >
            {copied ? (
              <Check size={16} color="green" />
            ) : (
              <Clipboard size={16} />
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
