import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl text-white">

      {/* Category + Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="px-3 py-1 rounded-lg bg-red-600/60 border border-red-400 text-xs uppercase tracking-wide">
          {data.category}
        </span>

        <span className="text-gray-300 text-sm">{data.date}</span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold tracking-wide">{data.title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mt-2 leading-relaxed">
        {data.description}
      </p>

      {/* Failed Badge */}
      <div className="mt-5">
        <button
          disabled
          className="w-full py-2 rounded-lg bg-red-500/80 border border-red-400 text-white font-semibold uppercase tracking-wide shadow-lg cursor-default"
        >
          Failed ✘
        </button>
      </div>

    </div>
  );
};

export default FailedTask;
