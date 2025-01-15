import { FaBell } from "react-icons/fa";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 border-b-[1px] border-text-color">
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <span>Shuryoba : The hunting ground</span>
      </section>
      <div className="flex gap-3 justify-center items-center w-fit">
        <input
          type="search"
          placeholder="Type here"
          className="input bg-transparent border-[1px] border-text-color focus:border-text-color  max-w-xs placeholder-text-color"
        />
        <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
          {" "}
          Search
        </button>
      </div>{" "}
      <nav>
        <ul className="flex gap-3 justify-center items-center">
          <li>
            <Link>
              <button className="btn bg-transparent border-[1px] border-text-color text-text-color hover:bg-text-color hover:text-background-color">
                {" "}
                Create
              </button>{" "}
            </Link>
          </li>
          <li>
            <Link>
              <FaBell className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="/sign-up">
              <div className="avatar">
                <div className="w-11 rounded">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
