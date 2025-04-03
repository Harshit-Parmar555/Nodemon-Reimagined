import { ExternalLink, Recycle } from "lucide-react";

const FeatureCard = ({ heading, para, icon: Icon }) => {
  return (
    <div className="w-full sm:max-w-sm h-auto flex flex-col justify-between gap-3 px-5 py-4 rounded-xl border-2 border-zinc-800 shadow-md bg-gradient-to-t from-[#0a0a0a] to-[#161616] cursor-pointer hover:shadow-lg transition-shadow">
      {/* Icon */}
      <Icon size={30} className="text-zinc-300" aria-label="Feature Icon" />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-semibold text-lg flex items-center gap-2">
          {heading} <ExternalLink size={14} aria-label="External Link Icon" />
        </h2>
        <p className="text-sm text-zinc-200">{para}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
