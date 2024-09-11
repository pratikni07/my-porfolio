import React from "react";

const PersonalCard = () => {
  return (
    <div className="bg-teal-50 w-[400px] p-6 rounded-lg shadow-md flex flex-col items-start justify-start">
      {/* Text Section */}
      <div className="text-left">
        <h3 className="font-semibold text-[20px] text-gray-800 mb-2">
          Hello, I'm Satyam! 👋
        </h3>
        <p className="text-gray-600 text-[14px] mb-4">
          I'm a passionate software developer with a strong background in web
          technologies. 🌐 I specialize in creating dynamic and user-friendly
          web applications using modern frameworks like React and Node.js. My
          expertise includes front-end development, back-end integration, and
          working with cloud technologies. ☁️
        </p>
        <p className="text-gray-600 text-[14px] mb-4">
          Currently, I am focused on building scalable web applications and
          exploring innovative solutions to enhance user experiences. 🚀 I am
          always eager to learn new technologies and tackle challenging projects
          that push the boundaries of what’s possible. 💡
        </p>
      </div>
    </div>
  );
};

export default PersonalCard;
