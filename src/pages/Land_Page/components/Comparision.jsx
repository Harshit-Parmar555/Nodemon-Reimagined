import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 p-6 rounded-2xl shadow-lg mt-24">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 text-center">
        <h1 className="font-[Inter] font-bold text-2xl sm:text-3xl p-2 text-white bg-clip-text">
          Why use Nodemon ?
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-sm sm:text-lg mb-2">
          Take a look at this table 🚀
        </p>
      </div>
      <div className="overflow-x-auto w-full flex items-center justify-center sm:w-[80%] md:w-[70%] lg:w-[60%]">
        <table className="w-full max-w-4xl border-collapse border border-zinc-900 rounded-lg">
          <thead>
            <tr className="bg-zinc-900 text-white">
              <th className="p-4 text-left w-1/2">Feature</th>
              <th className="p-4 text-center w-1/4">Nodemon</th>
              <th className="p-4 text-center w-1/4">Manual Restart</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Auto Restart on Changes", true, false],
              ["Saves Developer Time", true, false],
              ["Cross-Platform Support", true, true],
              ["Memory Efficient", true, false],
              ["Supports Custom Scripts", true, false],
              ["Works with any Node.js App", true, true],
            ].map(([feature, nodemon, manual], index) => (
              <tr
                key={index}
                className="border-t border-zinc-700 hover:bg-zinc-950 transition"
              >
                <td className="p-4 text-zinc-300">{feature}</td>
                <td className="p-4 text-center">
                  {nodemon ? (
                    <Check className="text-green-500 mx-auto" />
                  ) : (
                    <X className="text-red-500 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {manual ? (
                    <Check className="text-green-500 mx-auto" />
                  ) : (
                    <X className="text-red-500 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
