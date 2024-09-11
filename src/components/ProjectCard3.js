import React from "react";
import { Github } from "lucide-react";

const ProjectCard3 = ({ title, link }) => {
  return (
    <div className="bg-gray-50 w-[200px] h-[150px] p-4 rounded-lg shadow-md flex flex-col items-start justify-start">
      {/* GitHub Icon */}
      <div className="bg-gray-800 p-2 rounded-lg text-white mb-2">
        <Github className="w-6 h-6" />
      </div>

      {/* Text Section */}
      <div className="text-left">
        <h3 className="font-semibold text-[16px]">{title}</h3>
        <p className="text-gray-500 text-[12px]">{link}</p>
      </div>
    </div>
  );
};

export default ProjectCard3;
