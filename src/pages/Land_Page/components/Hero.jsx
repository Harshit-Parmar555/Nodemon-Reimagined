import React, { useState } from "react";
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
    <div className="relative w-full h-auto overflow-hidden flex flex-col items-center mt-48 gap-8">
      {/* Grid Background (Placed at the Parent Level to Prevent Navbar Issues) */}

      {/* Main Content */}
      <button className="flex items-center border-[1px] border-zinc-800 rounded-full py-1 px-4 text-sm text-white">
        ✨ Welcome to Nodemon <ArrowRight />
      </button>

      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="font-[Urbanist] font-medium text-6xl p-2 bg-gradient-to-t from-zinc-800 to-white text-transparent bg-clip-text">
          Auto-restarting Node.js apps made easy
        </h1>
        <p className="w-2xl text-center font-[Inter] text-zinc-400 text-base">
          "Nodemon watches your files and auto-restarts your Node.js app on
          changes, making development faster and hassle-free."
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-gray-200 text-black text-sm font-medium rounded-lg shadow-md hover:bg-gray-300 transition">
            Get Started
          </button>
          <button className="flex items-center gap-1 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg shadow-md border-[1px] border-zinc-800 transition">
            <Github size={20} /> GitHub
          </button>
        </div>

        {/* Command Copy Section */}
        <div className="flex items-center gap-2 text-white p-3 rounded-lg relative group cursor-pointer  bg-[#0a0a0a]">
          <code className="text-sm text-zinc-400">{command}</code>

          <button
            onClick={handleCopy}
            className="p-2 transition-opacity duration-300 cursor-pointer"
          >
            {copied ? (
              <Check size={16} color="green" />
            ) : (
              <Clipboard size={16} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
