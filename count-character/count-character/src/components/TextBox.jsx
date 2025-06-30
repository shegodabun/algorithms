import React from "react";

const TextBox = () => {
  return (
    <div className="max-w-[700px] mx-auto px-4">
      <textarea
        rows={6}
        className="placeholder:text-white w-full bg-gray-700 p-4 rounded-md outline-0 text-white mt-10 resize-none max-h-[300px] h-full border border-gray-100/10"
        placeholder="Start typing here.. or(paste your text)"
      ></textarea>

      <div className="flex mt-2 flex-col md:flex-row  gap-4 justify-between text-white">
        <div className="flex flex-col md:flex-row gap-4">
          {/* <div>
            <input type="checkbox" name="" id="exclude" />
            <label htmlFor="exclude"> Exclude spaces</label>
          </div> */}

          <div class="flex  ">
            <input
              type="checkbox"
              class="peer relative appearance-none w-5 h-5 border  border-gray-200 cursor-pointer  rounded-md  checked:bg-purple-300"
              id="excludes"
            />

            <label for="excludes" class="ms-2 text-sm font-medium ">
              Excludes spaces
            </label>
          </div>
          <div class="flex">
            <input
              type="checkbox"
              class="peer relative appearance-none w-5 h-5 border  border-gray-200 rounded-md cursor-pointer checked:bg-purple-300"
              id="character"
            />

            <label for="character" class="ms-2 text-sm font-medium ">
              Set Character Limit
            </label>
          </div>
        </div>
        <p>Approx, reading time: 1minute</p>
      </div>
    </div>
  );
};

export default TextBox;
