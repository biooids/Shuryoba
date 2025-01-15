import Carousel from "./Carousel";
import CommentSection from "./CommentSection";

function Project() {
  return (
    <section className="p-5 flex flex-col gap-3">
      <section className="grid grid-cols-2 gap-3 ">
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold ">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            alias, ad delectus, beatae corporis totam cumque dignissimos
            explicabo, cum quas aperiam est iure eum excepturi adipisci voluptas
            obcaecati dolore nam.
          </p>
          <div className="flex justify-between">
            <section className="flex gap-3">
              {" "}
              <div className="avatar">
                <div className="w-16 rounded">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span>Author</span>
                <span>Hapyong M. Edouard</span>
                <div className="flex gap-3">
                  {" "}
                  <span>github</span>
                  <span>Website</span>
                  <span>social</span>
                </div>{" "}
              </div>
            </section>
            <span>12 years ago</span>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div className="flex flex-col gap-3">
            {" "}
            <h2 className="text-3xl font-bold ">Tech Stach used </h2>
            <ul className="">
              <li># Mongo DB</li>
              <li># Express</li>
              <li># React</li>
            </ul>{" "}
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-3">
        <div className="mockup-code bg-white bg-opacity-5">
          <pre data-prefix=">" className="text-text-color">
            <code>
              git clone <span>url</span>
            </code>
          </pre>
          <pre data-prefix=">" className="text-text-color">
            <code>npm install </code>
          </pre>
          <pre data-prefix=">" className="text-text-color">
            <code>Done!</code>
          </pre>
        </div>
        <div className="flex gap-3">
          <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Live Preview
          </button>
          <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Full Code{" "}
          </button>
          <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Saved
          </button>
        </div>
        <Carousel />
        <CommentSection />
      </section>
    </section>
  );
}
export default Project;
