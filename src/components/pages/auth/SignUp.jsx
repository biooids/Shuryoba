import { BsGoogle } from "react-icons/bs";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router";

function SignUp() {
  return (
    <section className="min-h-screen flex justify-center  ">
      {" "}
      <form className="bg-white  bg-opacity-5 flex flex-col gap-1 h-fit mt-20 p-5 rounded-lg shadow-md w-full    max-w-md">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <p className="text-center">Add the required information below </p>
        <p>
          Already have an account ?{" "}
          <Link to="/log-in" className="underline text-blue-500">
            Log In
          </Link>
        </p>
        {/* Username Input */}
        <label className="input input-bordered flex items-center gap-3 bg-background-color ">
          <FaUser className="text-lg opacity-70" />
          <input
            type="text"
            className="grow bg-transparent focus:outline-non placeholder-text-color"
            placeholder="Username"
          />
        </label>

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
        <div className="form-control w-fit">
          <label className="label cursor-pointer gap-3">
            <span className="">Show password</span>
            <input
              type="checkbox"
              className="checkbox  checkbox-sm bg-transparent border-[1px] border-text-color checkbox-info"
            />
          </label>
        </div>
        <div className="flex justify-center items-center w-fit  gap-1 mb-3">
          <Link className=" text-blue-500 underline">
            Accept terms and conditions
          </Link>
          <input
            type="checkbox"
            className="checkbox w-fit  checkbox-sm bg-transparent border-[1px] border-text-color checkbox-info"
          />
        </div>

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

export default SignUp;
