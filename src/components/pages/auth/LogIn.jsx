import { BsGoogle } from "react-icons/bs";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router";

function LogIn() {
  return (
    <section className="min-h-screen flex justify-center  ">
      {" "}
      <form className="bg-white  bg-opacity-5 flex flex-col gap-1 h-fit mt-20 p-5 rounded-lg shadow-md w-full    max-w-md">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <p className="text-center">Add the required information below </p>
        <p>
          You do not have an account ?{" "}
          <Link to="/sign-up" className="underline text-blue-500">
            Sign Up{" "}
          </Link>
        </p>

        {/* Email Input */}
        <label className="input input-bordered flex items-center gap-3 bg-background-color">
          <FaEnvelope className="text-lg opacity-70" />
          <input
            type="email"
            className="grow bg-transparent focus:outline-none placeholder-text-color"
            placeholder="Email"
          />
        </label>

        {/* Password Input */}
        <label className="input input-bordered flex items-center gap-3 bg-background-color">
          <FaKey className="text-lg opacity-70" />
          <input
            type="password"
            className="grow bg-transparent focus:outline-none placeholder-text-color"
            placeholder="Password"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color"
        >
          {" "}
          Submit
        </button>
        <p className="text-center">Or</p>
        <button
          type="button"
          className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color"
        >
          <BsGoogle className="text-blue-500" />
          <span>oogle</span>
        </button>
      </form>
    </section>
  );
}

export default LogIn;
