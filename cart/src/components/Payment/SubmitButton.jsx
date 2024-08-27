import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="button"
      className="min-w-[150px] w-full px-6 py-3.5 text-sm bg-gray-800 text-white rounded-sm hover:bg-[#111]"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
