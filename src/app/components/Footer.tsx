import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCodepen, FaPhone, FaGlobe, FaEnvelope, FaMap } from 'react-icons/fa';
import logo from '/public/images/muhammad-shabbir-logo.png';
import BackToTop from './BackToTop';

const Footer: React.FC = () => {
  return (
    <>
      <BackToTop/>
      <footer className="px-4 lg:px-20">
        <div className="bg-black w-full rounded-tl-[30px] rounded-tr-[30px] p-10 pb-0">
          <h2>Let's Connect there</h2>
          <div className="grid grid-cols-12 gap-6 border-b-[1px] pb-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="logo">
                <a href="#">
                  <Image src={logo} alt="Logo" />
                </a>
                <p className="text-gray-300 text-sm">
                  Hi, I'm Muhammad Shabbir, a passionate web developer with expertise in creating modern, responsive websites. With a strong background in HTML, CSS, JavaScript, and WordPress, I specialize in delivering high-quality web solutions. Explore my portfolio to see my latest projects and get in touch for collaborations!
                </p>
                
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <h2 className="text-white mb-4 text-xl">Navigation</h2>
              <ul>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#">Home</a></li>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#about-me">About</a></li>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#service">Service</a></li>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#skills">Skills</a></li>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#projects">Project</a></li>
                <li className="leading-6"><a className="text-sm text-gray-300" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-white mb-4 text-xl">Contact</h2>
              <ul>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaPhone className="text-white" />
                  <a className="text-sm text-gray-300" href="tel:+923153987478">+92 3153987478</a>
                </li>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaGlobe className="text-white" />
                  <a className="text-sm text-gray-300" href="https://codewithshabbir.vercel.app/">My Website</a>
                </li>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaEnvelope className="text-white" />
                  <a className="text-sm text-gray-300" href="mailto:codewithshabbir07@gmail.com">codewithshabbir07@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaMap className="text-white" />
                  <p className="text-sm text-gray-300">Karachi, Pakistan</p>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-white mb-4 text-xl">My Social Links</h2>
              <ul className="social-icons-container flex gap-3 items-center relative">
                <li className="group relative border-2 border-white rounded-full">
                  <a
                    href="https://github.com/codewithshabbir"
                    className="social-link github relative w-10 h-10 text-white flex items-center justify-center rounded-full overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="z-10 icon" />
                  </a>
                </li>
                <li className="relative border-2 border-white rounded-full">
                  <a
                    href="https://codepen.io/codewithshabbir"
                    className="social-link codepen relative w-10 h-10 text-white flex items-center justify-center rounded-full overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCodepen className="z-10 icon" />
                  </a>
                </li>
                <li className="relative border-2 border-white rounded-full">
                  <a
                    href="https://www.linkedin.com"
                    className="social-link linkedin relative w-10 h-10 text-white flex items-center justify-center rounded-full overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="z-10 icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center py-5 text-white text-sm">
            © <span id="copyrightCurrentYear" className="mr-1">2024</span> 
            <b className="font-bold">Muhammad Shabbir</b>. All Rights Reserved. 
            <br />
            <a href="https://www.linkedin.com/in/codewithshabbir/" 
              className="text-orange-500 hover:text-orange-400 font-medium"
              target="_blank" 
              rel="noopener noreferrer">
              Connect with me on LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
