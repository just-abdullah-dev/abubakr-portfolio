import Image from "next/image";
import bannerModel from "/public/images/abu-bakar.png";
import upRightArrow from "/public/images/up-right.svg";
import servicesBg from "/public/images/services-bg.png";
import aboutMe from "/public/images/about-me.png";
import helloTop from "/public/images/hello-top.svg";
import nameBottom from "/public/images/name-bottom.svg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import {
  HiAcademicCap,
  HiBriefcase,
  HiBookOpen,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import ResponsiveGrid from "./components/ResponsiveGrid";
import SectionHeadings from "./components/SectionHeadings";
import ServicesCards from "./components/ServicesCards";
import ProgressBar from "./components/ProgressBar";
import SoftSkillsSlide from "./components/SoftSkillsSlide";
import Projects from "./components/Projects";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <section className="banner relative overflow-hidden">
        <ResponsiveGrid itemCount={128} />
        <div className="relative">
          <div className="flex flex-col items-center pt-40">
            <div className="relative">
              <h4 className="animate-fade-left text-xl font-semibold border border-black px-6 py-1 rounded-full">
                Hello
              </h4>
              <Image
                className="animate-fade-left absolute -top-6 -right-6"
                src={helloTop}
                alt=""
              />
            </div>
            <div className="relative">
              <h1 className="animate-fade-right cursor-scale text-2xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-center tracking-wide word leading-tight">
                I'm{" "}
                <span className="underline stroke-orange-500">
                  Muhammad Abu Bakar,
                </span>{" "}
                <br />
                Video Editor
              </h1>
              <Image
                className="animate-fade-right absolute -bottom-12 -left-4 xs:left-0 sm:left-3 lg:left-4 w-[55px] sm:w-[60px] lg:w-auto"
                src={nameBottom}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center relative -mt-10 sm:-mt-16 mb-0">
            <div className="image relative flex justify-center my-20">
              <Image
                className="animate-fade-up scale-150"
                src={bannerModel}
                alt="Model"
              />
            </div>

            <div className="absolute z-[2] bottom-10">
              <div className="slide-button-wrapper relative bg-white bg-opacity-25 rounded-full w-auto p-3">
                <input
                  className="hidden"
                  type="radio"
                  name="slide"
                  id="button-one"
                />
                <input
                  className="hidden"
                  type="radio"
                  name="slide"
                  id="button-two"
                />

                <div className="cursor-scale button-container flex">
                  <label
                    className="z-[2] text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14"
                    htmlFor="button-one"
                  >
                    <a href="#projects" className="flex items-center">
                      Portfolio
                      <Image src={upRightArrow} alt="Arrow" />
                    </a>
                  </label>

                  <label
                    className="z-[2] text-md sm:text-xl cursor-pointer text-white flex justify-center items-center w-32 sm:w-40 h-14"
                    htmlFor="button-two"
                  >
                    <a href="#contact" className="flex items-center">
                      Hire Me
                      <Image src={upRightArrow} alt="Arrow" />
                    </a>
                  </label>
                </div>

                <div className="slide-buttons z-[1] absolute top-3 bg-orange-500 w-32 sm:w-40 h-14 transition-transform duration-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="service relative px-4 md:px-20">
        <Image
          className="absolute w-full rounded-[45px] bottom-0 left-0"
          src={servicesBg}
          alt=""
        />
        <div data-aos="fade-up">
          <div className="relative py-20">
            <SectionHeadings heading="My Services" />
            <ServicesCards />
          </div>
        </div>
      </section>
      <section id="about-me" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-12 gap-6 mt-10">
            <div
              data-aos="fade-right"
              className="col-span-12 lg:col-span-6 my-20"
            >
              <Image
                className=" w-full h-auto object-cover scale-90"
                src={bannerModel}
                alt="Model"
              />
            </div>
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-6 flex flex-col relative items-start justify-center"
            >
              <h1 className="relative text-black text-4xl sm:text-5xl">
                About Me
              </h1>
              <div className="flex mt-2">
                <div className="relative ms-24 w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
              </div>
              <p className="text-black mt-5 text-sm sm:text-base">
                I am a creative multimedia professional skilled in editing
                short- and long-form videos for social media and digital
                platforms, designing engaging graphics, and delivering
                compelling visual storytelling. I lead video ideation and
                production, manage creative teams, and ensure content aligns
                with brand guidelines while enhancing audience engagement. With
                expertise in photography and social media strategies, I bring a
                strategic vision to every project, maintaining brand
                authenticity and delivering impactful results.
              </p>

              <div className="mt-3 w-full">
                <label className="text-black inline-block mb-1">
                  Video Editing
                </label>
                <ProgressBar percentage={"100%"} width="w-full" />
              </div>

              <div className="mt-3 w-full">
                <label className="text-black inline-block mb-1">
                  Graphic Designing
                </label>
                <ProgressBar percentage={"95%"} width="w-[95%]" />
              </div>

              <div className="mt-3 w-full">
                <label className="text-black inline-block mb-1">
                  Social media management
                </label>
                <ProgressBar percentage={"85%"} width="w-[85%]" />
              </div>

              <div className="relative block mt-8 line">
                <Button
                  classes="border-orange-500 bg-transparent stroke-orange-500 hover:text-white"
                  title="Download Resume"
                  icon={
                    <FaDownload
                      className="ml-1 inline-block text-sm font-bold"
                      width={24}
                      height={24}
                    />
                  }
                  link="/resume/cv.pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SoftSkillsSlide />

      <section id="skills" className="skills py-20">
        <div>
          <div data-aos="fade-up">
            <h1 className="relative text-5xl text-center">My Skills</h1>
            <div className="flex justify-center mt-2">
              <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-0 md:px-10 py-10">
            <div
              data-aos="fade-right"
              className="w-full md:w-2/4 px-5 md:px-10 mb-10 md:mb-0"
            >
              <h2 className="text-2xl underline">Tools:</h2>
              <div>
                <label className="inline-block mt-3 mb-1">
                  Adobe Premiere Pro
                </label>
                <ProgressBar percentage={"98%"} width="w-[98%]" />
              </div>
              <div>
                <label className="inline-block mt-3 mb-1">
                  Adobe Photoshop
                </label>
                <ProgressBar percentage={"94%"} width="w-[94%]" />
              </div>
              <div>
                <label className="inline-block mt-3 mb-1">Capcut</label>
                <ProgressBar percentage={"86%"} width="w-[86%]" />
              </div>
              <div>
                <label className="inline-block mt-3 mb-1">Corel Draw</label>
                <ProgressBar percentage={"80%"} width="w-[80%]" />
              </div>
              <div>
                <label className="inline-block mt-3 mb-1">Canva</label>
                <ProgressBar percentage={"75%"} width="w-[75%]" />
              </div>
            </div>
            <div data-aos="fade-left" className="w-full md:w-2/4 px-5 md:px-10">
              <h2 className="text-2xl underline">Ribbon:</h2>

              <div>
                <label className="inline-block mt-3 mb-1">
                  Team Collaboration
                </label>
                <ProgressBar percentage={"80%"} width="w-[80%]" />
                <label className="inline-block mt-3 mb-1">Video Editor</label>
                <ProgressBar percentage={"80%"} width="w-[80%]" />

                <label className="inline-block mt-3 mb-1">Creativity</label>
                <ProgressBar percentage={"80%"} width="w-[85%]" />
                <label className="inline-block mt-3 mb-1">
                  Graphic Designer
                </label>
                <ProgressBar percentage={"80%"} width="w-[90%]" />
                <label className="inline-block mt-3 mb-1">
                  Social Media Management
                </label>
                <ProgressBar percentage={"80%"} width="w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SoftSkillsSlide />

      <section className="my-journey py-20">
        <div data-aos="fade-up">
          <h1 className="relative text-5xl text-center">My Journey</h1>
          <div className="flex justify-center mt-2 mb-14">
            <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
          </div>
        </div>
        <div className="grid grid-rows-1 grid-cols-12 gap-6 mx-4 md:mx-20">
          <div data-aos="fade-right" className="col-span-12 lg:col-span-6">
          <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6">
              <div className="border-b-2 flex items-center pb-4 gap-4">
                <HiBookOpen className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                <h2 className="text-3xl">Education</h2>
              </div>
              <div className="card-body py-4">
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">BTE Peshawar KPK </h2>
                    <p className="text-sm text-gray-500">DAE (Civil)</p>
                  </div>
                  <div>
                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      2020 to 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body py-4">
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">TTB KPK</h2>
                    <p className="text-sm text-gray-500">DIT</p>
                  </div>
                  <div>
                  <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      1 year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-span-12 lg:col-span-6">
            <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6 mb-6">
              <div className="border-b-2 flex items-center pb-4 gap-4">
                <HiBriefcase className="bg-orange-400 text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                <h2 className="text-3xl">Work Experince</h2>
              </div>
              <div className="card-body py-4">
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">
                      Zarrar TV (Electronic Media)
                    </h2>
                    <p className="text-sm text-gray-500">
                      Senior Video Editor{" "}
                    </p>
                  </div>
                  <div>
                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      July 2022 to Present
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">
                      Apex Code (YT Channel)
                    </h2>
                    <p className="text-sm text-gray-500">
                      Video Shooting & Editing
                    </p>
                  </div>
                  <div>
                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      December 2024 to Present
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">
                      Pine News (Print/Electronic Media)
                    </h2>
                    <p className="text-sm text-gray-500">
                      Video Shooting & Editing
                    </p>
                  </div>
                  <div>
                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      October 2024 to Present
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="text-xl font-medium">
                      Daily AAJ Abbottabad (Print Media)
                    </h2>
                    <p className="text-sm text-gray-500">Photography</p>
                  </div>
                  <div>
                    <p className="bg-orange-400 text-white px-2 py-1 rounded text-xs">
                      Dec 2023 to Jan 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      <section id="projects" className="projects relative p-5 md:p-20 bg-black">
        <Image
          className="absolute w-full rounded-[45px] bottom-0 left-0"
          src={servicesBg}
          alt=""
        />
        <div data-aos="fade-up" className="mb-14">
          <h1 className="relative text-white text-3xl md:text-5xl text-center">
            My Projects
          </h1>
          <div className="flex justify-center mt-2">
            <div className="relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5"></div>
          </div>
        </div>
        <Projects />
      </section>

      <section id="contact" className="contact py-20 px-4 md:px-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <h2 data-aos="fade-up" className="text-5xl font-">
              Let's <span className="stroke-orange-500">Connect</span> &
              <br /> <span className="stroke-orange-500">Collaborate</span>
            </h2>
            <p data-aos="fade-up" className="my-6">
              Thank you for visiting my portfolio! If you have any questions,
              inquiries, or collaboration opportunities, I’d love to hear from
              you. Please fill out the contact form or reach out through the
              provided social media links, and I’ll get back to you as soon as
              possible.
            </p>

            <ul data-aos="fade-up">
              <li className="my-2">
                <a className="flex gap-4 items-center" href="tel:+923335079649">
                  <HiPhone className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  +92 333 5079649
                </a>
              </li>
              <li className="my-2">
                <a
                  className="flex gap-4 items-center"
                  href="mailto:abu230513@gmail.com"
                >
                  <HiMail className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  abu230513@gmail.com
                </a>
              </li>
              <li
             className="my-2">
                <a
                  className="flex gap-4 items-center"
                  target="_blank"
                  href="https://www.facebook.com/abubakar.baig.524"
                >
                  {" "}
                  <FaFacebook className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  Facebook
                </a>
              </li>
              <li
             className="my-2">
                <a
                  className="flex gap-4 items-center"
                  target="_blank"
                  href="https://www.instagram.com/abu_bakar_baig3"
                >
                  {" "}
                  <FaInstagram className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  Instagram
                </a>
              </li>
              <li
             className="my-2">
                <a
                  className="flex gap-4 items-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/abu-bakar-baig-196528305"
                >
                  {" "}
                  <FaLinkedin className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  LinkedIn
                </a>
              </li>
              <li
             className="my-2">
                <a
                  className="flex gap-4 items-center"
                  target="_blank"
                  href="https://wa.me/qr/CZAOVMQCPMQBE1"
                >
                  {" "}
                  <FaWhatsapp className="bg-orange-500 text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />{" "}
                  DM Me
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div
              data-aos="fade-left"
              className="bg-orange-500 p-8 rounded-lg w-full max-w-xl"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
