import React from "react";
import { Linkedin } from "lucide-react";

const ProjectCard2 = ({ title, link }) => {
  return (
    <div className="bg-blue-50 w-[200px] h-[150px] p-4 rounded-lg shadow-md flex flex-col items-start justify-start">
      {/* LinkedIn Icon */}
      <div className="bg-blue-600 p-2 rounded-lg text-white mb-2">
        <Linkedin className="w-6 h-6" />
      </div>

      {/* Text Section */}
      <div className="text-left">
        <h3 className="font-semibold text-[16px]">{title}</h3>
        <p className="text-gray-500 text-[12px]">{link}</p>
      </div>
    </div>
  );
};

export default ProjectCard2;
