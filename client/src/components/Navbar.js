import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
const Navbar = () => {
  const[islogin, setIsLogin] = useState(false)
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      {/* logo */}
      <h1 className="text-xl font-extrabold">
        <Link
          to="/"
          onClick={() => {
            toast.success("clicked");
          }}
        >
          Blog Market
        </Link>
      </h1>

      {/* searchbar */}
      <div className="flex justify-center items-center space-x-0 bg-slate-200 rounded-full">
        <p className="px-2">🔍</p>
        <input
          className="px-3 py-1 bg-slate-200 rounded-e-full outline-none"
          type="text"
          placeholder="Search a post.."
          onChange={(e) => e.target.value}
        />
      </div>

      {/* login signup button */}
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {islogin ? (
          <>
            <button>
              <Link to="/">Logout</Link>
            </button>

            <button>
              <Link to="/profile">User</Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/signUp">SignUp</Link>
            </button>
          </>
        )}

        <button>Theme🌙</button>
      </div>
    </div>
  );
};

export default Navbar;
