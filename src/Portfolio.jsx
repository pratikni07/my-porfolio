import React from "react";
import { Linkedin, MapPin, Link, Github } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import resumephoto from "./resumephotot (2).png";
import ProjectCard2 from "./components/ProjectCard2";
import ProjectCard3 from "./components/ProjectCard3";
import PersonalCard from "./components/PersonalCard";
import ResumeCard from "./components/ResumeCard";
const Portfolio = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-[100%] lg:w-[90%] mx-auto p-6 lg:p-10">
      {/* Left Profile Section */}
      <div
        className="w-full lg:w-[30%] text-center lg:text-left mb-10 lg:mb-0"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img
          src={resumephoto}
          alt="Profile"
          className="h-[200px] w-[200px] rounded-full mx-auto lg:mx-0"
        />
        <h1
          className="font-bold text-[30px] mt-[30px]"
          style={{ fontWeight: "800" }}
        >
          Pratik Nikat
        </h1>
        <p className="text-[20px] mt-[10px]" style={{ fontWeight: "600" }}>
          Full Stack Developer 💻
        </p>
        <p
          className="text-[18px] mt-[5px] text-gray-600"
          style={{ fontWeight: "400" }}
        >
          Passionate about building scalable applications 🚀
        </p>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <Linkedin className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <Github className="text-gray-600 hover:text-black cursor-pointer" />
          <MapPin className="text-gray-600 hover:text-red-600 cursor-pointer" />
          <Link className="text-gray-600 hover:text-green-600 cursor-pointer" />
        </div>
      </div>

      {/* Right Project Section */}
      <div className="w-full lg:w-[64%] grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Card 1 */}
        <div>
          <ProjectCard
            image="https://img-c.udemycdn.com/course/750x422/5523428_184b_2.jpg"
            title="Awesome Project"
            description="Building the future of tech"
            link="https://your-project-page-link.com"
          />
          <div className="mt-5 flex gap-7">
            <ProjectCard3 title="GitHub" link="github.com" color="github" />
            <ProjectCard2
              title="LinkedIn"
              link="linkedin.com"
              color="linkedin"
            />
          </div>
          <div className="mt-4">
            <ResumeCard />
          </div>
        </div>

        {/* Project Card 2 */}
        <div>
          <PersonalCard />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
