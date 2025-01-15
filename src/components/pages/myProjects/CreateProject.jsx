import InPutCarousel from "./InPutCarousel";
import ReactHashTags from "./ReactHashTags";

function CreateProject() {
  return (
    <section className="min-h-screen ">
      {" "}
      <section className="">
        {" "}
        <section className="p-5 flex flex-col gap-3 border-b-[1px] border-text-color ">
          <h2 className="text-3xl font-bold">Create Post</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste et
            repellendus ex perferendis exercitationem! Quis id commodi,
            consequatur libero atque nisi maiores accusantium illum tempora
            quasi, accusamus quia eaque vitae.
          </p>
        </section>
        <form className="p-5 flex flex-col gap-3 bg-whit ">
          {" "}
          <input
            type="search"
            placeholder="Title"
            className="input bg-transparent border-[1px] border-text-color focus:border-text-color   placeholder-text-color"
          />
          <textarea
            className="textarea  bg-transparent border-[1px] border-text-color focus:border-text-color   placeholder-text-color"
            placeholder="description"
          />
          <ReactHashTags />
          <section>
            <InPutCarousel />
          </section>
          <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
            {" "}
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}
export default CreateProject;
