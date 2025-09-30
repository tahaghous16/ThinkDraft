import React from "react";
import { assets } from "../../assets/assets";

import { useContextData } from "../../context/ContextApi";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);
  const { axios } = useContextData();

  const aprovedComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog?.title}
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comments</b> :{" "}
        {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {blogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={aprovedComment}
              src={assets.tick_icon}
              className="w-5 hover:scale-110 cursor-pointer transition-all"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className="w-5 hover:scale-110 cursor-pointer transition-all"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
