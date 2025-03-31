import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0a0a0a] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:40px_40px]"></div>
  );
};

export default Background;
