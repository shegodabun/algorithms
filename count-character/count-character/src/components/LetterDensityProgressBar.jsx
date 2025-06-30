import React from "react";

const LetterDensityProgressBar = ({ letter, progress, character_num }) => {
  return (
    <div className="text-white flex items-center gap-10">
      <h2 className="w-[10px]">{letter}</h2>

      <div className="bg-gray-700 rounded-full w-[90%]">
        <div
          className="bg-purple-300 h-3 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>

      <p className="flex ">
        <span> {character_num}</span>
        <span> ({progress})</span>
      </p>
    </div>
  );
};

export default LetterDensityProgressBar;
