import React from "react";
import { FaChevronRight } from "react-icons/fa";
import project1 from "/public/images/projects/Restoran.png";
import project2 from "/public/images/projects/Positivus.png";
import project3 from "/public/images/projects/Scoop-Home.png";
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
    title: "Restoran - Complete Front-end Solution",
    description:
      "A sleek, modern, and fully responsive website template for restaurants, built with HTML, CSS, Bootstrap, JavaScript, Slick Slider, and AOS. This template includes sections like the menu, about us, testimonials, gallery, and contact information, designed to offer a seamless user experience across all devices.",
    image: project1,
    liveLink: "https://codewithshabbir.github.io/Restoran/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Slick Slider", "AOS"],
  },
  {
    title: "Positivus - Responsive Landing Page",
    description:
      "This is a fully responsive landing page created based on the SMIT - Web Batch 12 Module 1 design on Figma. The project uses HTML, CSS, Bootstrap, and a little bit of JavaScript to deliver a smooth and interactive experience. It adapts seamlessly to different screen sizes, ensuring a great user experience across devices.",
    image: project2,
    liveLink: "https://codewithshabbir.github.io/Positivus/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
  },
  
  {
    title: "Social Scoop - Responsive Landing Page",
    description:
      "This responsive HTML template is designed for digital marketing agencies. It features a hero banner that includes a call-to-action form and navigation menu. The project utilizes custom fonts and FontAwesome icons to enhance the user experience.",
    image: project3,
    liveLink: "https://html-template-task.netlify.app/",
    tags: ["HTML5", "CSS3"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div key={index} data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full" layout="responsive"
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
                <span key={index} className="bg-orange-400 text-white rounded-xl px-3 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
            <Button
                classes="border-white bg-transparent text-white hover:text-white"
                title="Live Preview"
                icon={<FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />}
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
