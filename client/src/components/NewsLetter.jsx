const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semiboldbold">
        Never Miss a Blog!
      </h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          type="text"
          placeholder="Enter your email"
          required
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500 "
        />
        <button
          type="submit"
          className="md:px-10 px-8 h-full text-white bg-black/80 hover:bg-purple transition-all cursor-pointer  rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
