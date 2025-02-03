import React from "react";

const Button:React.FC<{classes:string, title:string, icon:React.ReactNode, link:string}> = ({ classes, title, icon, link }) => {
  return (
    <a
      className={`about-btn border-2 relative inline-block text-[16px] leading-[50px] font-bold rounded-xl px-[35px] pt-[1px] pb-0 overflow-hidden font-sans capitalize transition-all ease-linear duration-300 z-[1] ${classes}`}
      target="_blank"
      href={link}
      rel="noopener noreferrer"
    >
      {title}
      {icon}
      <span className="hover-btn hover-bx"></span>
      <span className="hover-btn hover-bx2"></span>
      <span className="hover-btn hover-bx3"></span>
      <span className="hover-btn hover-bx4"></span>
    </a>
  );
};

export default Button;
