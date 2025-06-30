import React from "react";

const CharacterBox = ({ text_number, text_description, bg_color }) => {
  return (
    <div className={`${bg_color}  py-7 px-4 rounded-lg`}>
      <h3 className="text-4xl font-semibold mb-4">{text_number}</h3>
      <p>{text_description}</p>
    </div>
  );
};

export default CharacterBox;
