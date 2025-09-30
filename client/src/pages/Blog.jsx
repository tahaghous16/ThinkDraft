import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useContextData } from "../context/ContextApi";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState([]);
  const [content, setContent] = useState([]);

  const { axios } = useContextData();

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // backend error
      } else {
        toast.error(error.message); // network/client error
      }
    }
  };

  const fetchComment = async () => {
    try {
      const { data } = await axios.post("/api/blog/comments", { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // backend error
      } else {
        toast.error(error.message); // network/client error
      }
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blog: id,
        name,
        content,
      });
      if (data.success) {
        toast.success(data.message);
        setName(""), setContent("");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // backend error
      } else {
        toast.error(error.message); // network/client error
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComment();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        className="absolute -top-52 -z-1 opacity-50"
      />
      <Navbar />

      <div className="text-center mt-15 text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>
        <h2
          className="my-5 max-w-lg truncate mx-auto"
          dangerouslySetInnerHTML={{ __html: data.subTitle }}
        ></h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Taha Ghous
        </p>
      </div>

      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} className="rounded-3xl mb-5" alt="" />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* comment section */}

        {/* <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p>Commets ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl  rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} className="w-6" />
                  <p className="fonr-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-10 mb-8 max-w-2xl mx-auto">
          <p className="text-base font-semibold text-gray-800 mb-4">
            Comments ({comments.length})
          </p>

          {/* Comments List */}
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 shadow-sm rounded-md p-3 hover:shadow-md transition duration-300 text-sm"
              >
                {/* User Info */}
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={assets.user_icon}
                    className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                    alt="User"
                  />
                  <p className="font-medium text-gray-900 text-sm">
                    {item.name}
                  </p>
                </div>

                {/* Comment Content */}
                <p className="text-gray-700 leading-snug ml-1">
                  {item.content}
                </p>

                {/* Timestamp */}
                <div className="absolute right-3 bottom-2 text-[11px] text-gray-400">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your Comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="comment.."
              required
              className="w-full p-2 border border-gray-300 rounded outline-none h-28"
            ></textarea>

            <button
              className="bg-primary text-white rounded p-2 px-8 hover:scale-x-105 transition-all cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* share buttons */}
        <div className="my-25 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this articles on social media
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.googleplus_icon} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
