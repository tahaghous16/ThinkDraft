import { assets } from "../assets/assets.js";
import { useContextData } from "../context/ContextApi.jsx";
const Navbar = () => {
  const { navigate, token } = useContextData();
  return (
    <div className="flex justify-between items-center py-9 mx-8 sm:mx-8 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.ThinkDraft}
        alt="logo"
        className="w-39 sm:w-44 cursor-pointer"
      />
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-black text-white px-10 py-2.5"
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
