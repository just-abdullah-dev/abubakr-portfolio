import React from 'react'
import { CiStar } from "react-icons/ci";

const softSkills = [
    "Social Media Influencer",
    "EX-Tech Youtuber",
    "Prompt Engineering",
    "Canva Proficiency",
    "AI Tools Utilization",
    "Problem Solving",
    "Team Collaboration",
    "Creativity",    
]

const SoftSkillsSlide: React.FC = () => {
  return (
    <div aria-hidden="true" className="bg-orange-400 w-full overflow-hidden -rotate-3 mt-10 py-5">
      <div className="bg-white py-1">
        <ul className="flex animate-slide whitespace-nowrap items-center">
          {
            [...softSkills, ...softSkills].map((skill, index) => (
              <div key={index} className="inline-flex items-center ">
                <li className="inline-block">{skill}</li>
                <CiStar  className="mx-2 text-red-600 w-6" />
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default SoftSkillsSlide;
