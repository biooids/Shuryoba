import { Link } from "react-router";
import {
  FaHome,
  FaFolderOpen,
  FaBookmark,
  FaBell,
  FaExclamationTriangle,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";

function SideBar() {
  return (
    <nav className="border-r border-text-color h-full p-5 flex flex-col justify-between">
      {/* Top Section: Navigation */}
      <div>
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul className="flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="my-projects"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaFolderOpen className="text-xl" />
            <span>My Projects</span>
          </Link>
          <Link
            to="/saved"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaBookmark className="text-xl" />
            <span>Saved Projects</span>
          </Link>
          <Link
            to="/notifications"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </Link>
          <Link
            to="/report"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaExclamationTriangle className="text-xl " />
            <span>Report User</span>
          </Link>
        </ul>
        <p className="text-sm ">
          We value your work. Report any unauthorized project posts to ensure
          fair use.
        </p>
      </div>

      {/* Middle Section: Extra Info */}
      <div className="my-5">
        <h3 className="text-lg font-bold">Explore</h3>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl">🌐</span>
          <a
            href="https://biooids.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            biooids.com
          </a>
        </div>
      </div>

      {/* Bottom Section: Profile & Settings */}
      <div className="mt-auto">
        <h3 className="text-lg font-bold mb-3">User Options</h3>
        <div className="flex flex-col gap-3">
          <Link
            to="/settings"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaCog className="text-xl" />
            <span>Settings</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-3 hover:bg-white hover:bg-opacity-5 p-3 rounded-lg transition"
          >
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
