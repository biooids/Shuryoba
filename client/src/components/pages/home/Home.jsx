import { FaGithub } from "react-icons/fa";
import MockUp from "./MockUp";
import AllProjects from "./components/AllProjects";
import "./home.css";
import { CgWebsite } from "react-icons/cg";

function Home() {
  return (
    <section className=" flex gap-3 flex-col ">
      <section className=" p-5 flex flex-col gap-3">
        <h1 className="text-3xl">Shuryoba : The hunting ground </h1>
        <section className=" grid grid-cols-2 gap-3">
          {" "}
          <div className="flex flex-col justify-between">
            {" "}
            <div>
              <p>Discover source codes and open source you want</p>
              <p>
                All projects from this site are from different sources hunted
                for you to use them for free attention not for commercial use.
              </p>
            </div>
            <div className="flex  w-fit gap-3">
              <a
                href="https://github.com/biooids"
                target="_blank"
                className="flex flex-col justify-center items-center bg-white p-3 bg-opacity-5 rounded-lg"
              >
                <FaGithub className="text-xl" />
                <span>Git hub</span>
              </a>
              <a
                href="https://www.biooids.com/"
                className="flex flex-col justify-center items-center bg-white p-3 bg-opacity-5 rounded-lg"
                target="_blank"
              >
                {" "}
                <CgWebsite className="text-xl" />
                <span> Portfolio </span>
              </a>{" "}
            </div>
          </div>
          <MockUp />
        </section>
      </section>
      <AllProjects />
    </section>
  );
}
export default Home;
