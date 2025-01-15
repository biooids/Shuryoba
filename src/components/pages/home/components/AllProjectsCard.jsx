import { Link } from "react-router";
import image from "./../../../../assets/image.jpeg";
function AllProjectsCard() {
  return (
    <div className="flex flex-col gap-3 border-[1px] p-3 border-text-color rounded-lg">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex gap-3">
        <span>react</span>
        <span>react</span>
        <span>react</span>
      </div>
      <div>
        {" "}
        <h3 className="line-clamp-1 font-bold">Full stack MERN project</h3>
        <p className="line-clamp-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi a
          ipsam, hic, alias odio labore incidunt vitae eius odit eligendi ad
          aspernatur repudiandae adipisci culpa magnam eaque delectus ut
          voluptatibus!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {" "}
        <Link to="project">
          <button className="btn w-full  bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Clone
          </button>
        </Link>{" "}
        <Link to="project">
          <button className="btn w-full  bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Save
          </button>
        </Link>{" "}
      </div>
      <section className="flex justify-between">
        <div>
          <div className="avatar">
            <div className="rounded w-16 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex flex-col">
            <span>Hunter:</span>
            <span>Hwapyong Edouard</span>
          </div>
        </div>
        <div>12 years ago</div>
      </section>
    </div>
  );
}
export default AllProjectsCard;
