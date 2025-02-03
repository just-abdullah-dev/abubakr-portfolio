import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaMap,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaAddressBook,
} from "react-icons/fa";
import logo from "/public/images/muhammad-shabbir-logo.png";
import BackToTop from "./BackToTop";
import { HiMail } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <>
      <BackToTop />
      <footer className="px-4 lg:px-20">
        <div className="bg-black w-full rounded-tl-[30px] rounded-tr-[30px] p-10 pb-0">
          <h2>Let's Connect there</h2>
          <div className="grid grid-cols-12 gap-6 border-b-[1px] pb-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="logo">
                <a href="#" className=" font-bold text-white md:text-xl">
                Abu Bakar
                </a>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <h2 className="text-white mb-4 text-xl">Navigation</h2>
              <ul>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#">
                    Home
                  </a>
                </li>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#about-me">
                    About
                  </a>
                </li>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#service">
                    Service
                  </a>
                </li>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#projects">
                    Project
                  </a>
                </li>
                <li className="leading-6">
                  <a className="text-sm text-gray-300" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-white mb-4 text-xl">Contact</h2>
              <ul>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaPhone className="text-white" />
                  <a className="text-sm text-gray-300" href="tel:+923335079649">
                    +92 333 5079649
                  </a>
                </li>
                <li className="flex items-center gap-2 pb-2 leading-6">
                  <FaAddressBook className="text-white" />
                  <a className="text-sm text-gray-300" href="tel:+923335079649">
                    Haripur, KPK
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h2 className="text-white mb-4 text-xl">My Social Links</h2>
              <ul className="social-icons-container flex gap-3 items-center relative">
                <li className="my-2">
                  <a
                    className="flex gap-4 items-center"
                    href="mailto:abu230513@gmail.com"
                  >
                    <HiMail className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="flex gap-4 items-center"
                    target="_blank"
                    href="https://www.facebook.com/abubakar.baig.524"
                  >
                    {" "}
                    <FaFacebook className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="flex gap-4 items-center"
                    target="_blank"
                    href="https://www.instagram.com/abu_bakar_baig3"
                  >
                    {" "}
                    <FaInstagram className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="flex gap-4 items-center"
                    target="_blank"
                    href="https://www.linkedin.com/in/abu-bakar-baig-196528305"
                  >
                    {" "}
                    <FaLinkedin className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a
                    className="flex gap-4 items-center"
                    target="_blank"
                    href="https://wa.me/qr/CZAOVMQCPMQBE1"
                  >
                    {" "}
                    <FaWhatsapp className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center py-5 text-white text-sm">
            ©{" "}
            <span id="copyrightCurrentYear" className="mr-1">
              2025
            </span>
            <b className="font-bold">Abu Bakar</b>. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
