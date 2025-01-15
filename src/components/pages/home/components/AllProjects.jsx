import { Link } from "react-router";
import AllProjectsCard from "./AllProjectsCard";

function AllProjects() {
  return (
    <section className="flex flex-col gap-3 p-5 border-t-[1px] border-text-color">
      <h3 className="text-3xl"> Choose what you want</h3>
      <nav className="flex gap-3 ">
        <Link className="badge border-[1px] border-text-color bg-transparent  hover:bg-text-color hover:text-background-color text-text-color ">
          Latest
        </Link>
        <Link className="badge border-[1px] border-text-color bg-transparent  hover:bg-text-color hover:text-background-color text-text-color ">
          html
        </Link>
        <Link className="badge border-[1px] border-text-color bg-transparent  hover:bg-text-color hover:text-background-color text-text-color ">
          html+css
        </Link>
        <Link className="badge border-[1px] border-text-color bg-transparent  hover:bg-text-color hover:text-background-color text-text-color ">
          html+css+js
        </Link>
      </nav>

      <section className=" all-projects-card gap-3">
        <AllProjectsCard />
      </section>
    </section>
  );
}
export default AllProjects;
