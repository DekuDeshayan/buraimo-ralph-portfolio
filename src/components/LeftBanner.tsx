import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Software Developer."],
    // words: ["Software Engineer.", "Full Stack Software Developer.", "Webmaster", "Web Hosting Specialist"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ralph Buraimo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-[#c4cfde] font-bodyFont leading-6 tracking-wider">
          I am a passionate Software Engineer with hands-on experience in technologies like 
          Spring Boot and React. My expertise lies in building robust Java EE applications 
          and designing RESTful web services, while always staying curious and eager to 
          explore the latest trends in software development.
          <br /><br />
          Collaboration is at the heart of my approach. I thrive in team environments, where 
          we combine ideas to tackle challenges and create impactful solutions. Let’s connect 
          and make something great together!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>


        <div className="card mt-8 p-6 bg-[#212428] shadow-xl rounded-lg text-center">
          <h2 className="text-base font-semibold text-gray-300 uppercase mb-6">
            Download my curriculum vitae:
          </h2>
          <div className="flex justify-center gap-6">
            <button className="rn-btn relative px-6 py-3 rounded-lg font-medium text-sm text-[#ff014f] transition-transform duration-300 shadow-lg bg-gradient-to-br from-[#1e2024] to-[#23272b] hover:translate-y-[-5px]">
              <span className="absolute inset-0 bg-gradient-to-br from-[#212428] to-[#16181c] opacity-0 transition-opacity duration-300 rounded-lg"></span>
              Download CV
            </button>
            <button className="rn-btn relative px-6 py-3 rounded-lg font-medium text-sm text-[#ff014f] transition-transform duration-300 shadow-lg bg-transparent hover:translate-y-[-5px]">
              <span className="absolute inset-0 bg-gradient-to-br from-[#212428] to-[#16181c] opacity-0 transition-opacity duration-300 rounded-lg"></span>
              Contact Me
            </button>
          </div>
        </div>



        {/* <div className="card mt-8 p-6 bg-[#212428]  shadow-xl rounded-lg text-center">
          <h2 className="text-base font-semibold text-gray-300 uppercase mb-6">
            Download my curriculum vita:
          </h2>
          <div className="flex justify-center gap-6">
            <button className="px-6 py-3  text-[#ff014f] font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
              Download CV
            </button>
            <button className="px-6 py-3  text-[#ff014f] font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              Contact Me
            </button>
          </div>
        </div> */}
      
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
