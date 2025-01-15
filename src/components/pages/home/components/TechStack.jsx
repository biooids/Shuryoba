import { FaReact, FaNodeJs, FaDocker, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiDaisyui } from "react-icons/si";

function TechStack() {
  return (
    <div>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-text-color">
          {/* MongoDB */}
          <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#47A248]">
              <SiMongodb size={32} />
            </span>
          </button>
          {/* Express */}
          <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#000000]">
              <SiExpress size={32} />
            </span>
          </button>
          {/* React */}
          <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#61DAFB]">
              <FaReact size={32} />
            </span>
          </button>
          {/* Node.js */}
          <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#339933]">
              <FaNodeJs size={32} />
            </span>
          </button>
          {/* Tailwind CSS */}
          <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#38B2AC]">
              <SiTailwindcss size={32} />
            </span>
          </button>
          {/* Daisy UI */}
          <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#5A0EF8]">
              <SiDaisyui size={32} />
            </span>
          </button>
          {/* Docker */}
          <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-text-color p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
            <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1 text-[#2496ED]">
              <FaDocker size={32} />
            </span>
          </button>
          {/* Profile */}
          <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-text-color cursor-pointer transition-all duration-500 z-0">
            <div className="w-full  h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <FaCode size={32} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
