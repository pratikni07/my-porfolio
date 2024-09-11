import React from "react";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div
      className="w-full h-[180px] rounded-[20px] overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => (window.location.href = link)}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-60 p-4">
        <i className="fas fa-laptop-code text-[40px] text-white mb-2"></i>
        <h2
          className="text-white font-bold text-[22px]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-white text-[14px] mt-2">{description} 🌐</p>
      </div>
    </div>
  );
};

export default ProjectCard;
