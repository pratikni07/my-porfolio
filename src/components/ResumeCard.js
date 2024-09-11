import React from "react";

const ResumeCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3128/3128271.png"
        alt="Resume Icon"
        className="w-12 h-12 rounded-full border border-gray-300 p-1 bg-gray-50"
      />
      <span className="text-lg font-semibold text-gray-800">Resume</span>
    </div>
  );
};

export default ResumeCard;
