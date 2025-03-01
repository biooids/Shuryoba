import { Link } from "react-router";
import MyProjectCard from "./MyProjectCard";
import "./myProjects.css";

function MyProjects() {
  return (
    <section className="min-h-screen  flex flex-col gap-3 ">
      <section className="p-5 flex flex-col gap-3 border-b-[1px] border-text-color">
        <h2 className="text-3xl font-bold">My projects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quis
          sint neque harum repudiandae repellat, labore eum ratione fugiat, ea
          maiores cum exercitationem praesentium eligendi? Quibusdam error animi
          temporibus? Repellat.
        </p>
        <Link to="/create" className="w-fit">
          {" "}
          <button className="btn   bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Create
          </button>
        </Link>
      </section>
      <section className="my-projects-card p-5">
        {" "}
        <MyProjectCard />
      </section>
    </section>
  );
}
export default MyProjects;
