import React from "react";
import { FaChevronRight } from "react-icons/fa";
import project1 from "/public/images/projects/p1.png";
import project2 from "/public/images/projects/p2.png";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  liveLink: string;
  tags: string[];
}

const projectsData: Project[] = [
  {
    title: "Zarrar TV(Electronic Media)",
    description:
      "This project showcases my skills in social media management, video editing, and video & photo creation. I worked on creating and managing content to make it more engaging. I also handled team management to ensure smooth teamwork and better results.",
    image: project1,
    liveLink: "https://www.facebook.com/zarrartvofficial",
    tags: [
      "Social media management",
      "Video editing",
      "Video & photo creation",
      "Team management",
    ],
  },
  {
    title: "Apex code(YT Channel)",
    description:
      "In this project, I worked on video editing, video creation, and graphic designing to produce high-quality content. I edited and created engaging videos, added effects, and improved visuals. Additionally, I designed eye-catching graphics like posters and thumbnails to enhance the overall presentation.",
    image: project2,
    liveLink: "https://www.youtube.com/@ApexCode46",
    tags: ["Video editing", "Video creation", "Graphic Designing"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl"
        >
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full"
              layout="responsive"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm mt-2 text-gray-200 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tags, index) => (
                <span
                  key={index}
                  className="bg-orange-400 text-white rounded-xl px-3 py-[0.5px]"
                >
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
              <Button
                classes="border-white bg-transparent text-white hover:text-white"
                title="Live Preview"
                icon={
                  <FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />
                }
                link={project.liveLink}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
