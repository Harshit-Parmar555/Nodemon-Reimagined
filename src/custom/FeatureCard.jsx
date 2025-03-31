import { ExternalLink, Recycle } from "lucide-react";

const FeatureCard = () => {
  return (
    <div className="h-44 flex flex-col justify-between px-4 py-4 rounded-xl border-2 border-zinc-800 shadow-md max-w-sm bg-gradient-to-t from-[#0a0a0a] to-[#161616]">
      <Recycle size={30} className="text-zinc-300" />
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-semibold text-lg flex items-center gap-1">
          React <ExternalLink size={14} />
        </h2>
        <p className="text-sm text-zinc-200">
          The library for web and native user interfaces. Next.js is built on
          the latest React features, including Server Components and Actions.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
