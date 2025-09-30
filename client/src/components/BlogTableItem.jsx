import React from "react";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { useContextData } from "../context/ContextApi";

const BlogTableItem = ({ blog, fetchBlog, index }) => {
  const { title, createdAt } = blog;

  const blogDate = new Date(createdAt);
  const { axios } = useContextData();
  
  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete  this blog?"
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/blog/delete", { id: blog._id });

      if (data.success) {
        toast.success(data.message);
        await fetchBlog();
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

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlog();
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

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? `text-green-600` : `text-orange-700`
          }`}
        >
          {" "}
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2  py-4 flex text-xs gap-3">
        <button
          onClick={togglePublish}
          className="border px-2 py-0.5  mt-1 rounded cursor-pointer"
        >
          {" "}
          {blog.isPublished ? "UnPublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt="Cross icon"
          className="w-8 sm:m hover:scale-110 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
