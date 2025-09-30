import { useRef } from "react";
import { assets } from "../assets/assets.js";
import { useContextData } from "../context/ContextApi.jsx";

const Header = () => {
  const { input, setInput } = useContextData();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-24 mb-12">
        {/* AI Feature Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-2 mb-8 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 text-blue-50 shadow-lg">
          <img src={assets.star_icon} alt="icon" className="w-5 h-5" />
          <p className="text-sm sm:text-base">AI-powered feature</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold sm:leading-tight text-gray-800 mb-6">
          Share Ideas & Insights <br />
          on{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
            ThinkDraft
          </span>
        </h1>

        {/* Subheading */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
          Your personal AI-powered blogging platform to express thoughts, share
          knowledge, and connect with readers worldwide.
        </p>

        {/* Search Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden shadow-md"
        >
          <input
            type="text"
            ref={inputRef}
            required
            placeholder="Search Blogs"
            className="w-full pl-4 py-2 outline-none"
          />
          <button
            className="bg-black text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Clear Search Button */}
      <div className="text-center mb-12">
        {input && (
          <button
            onClick={onClear}
            className="border font-light text-xs sm:text-sm py-2 px-4 rounded-sm shadow-custom-sm cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Background Image */}
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
