// import { useNavigate } from "react-router";

// const BlogCard = ({ blog }) => {
//   const { title, description, category, image, _id } = blog;
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/blog/${_id}`)}
//       className="w-full rounded-lg overflow- shadow hover:scale-105 hover:shadow-primary/25 duration-300 cursor-pointer"
//     >
//       <img src={image} alt="" className="aspect-video" />
//       <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
//         {category}
//       </span>
//       <div className="p-5">
//         <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
//         <p
//           className="mb-3 text-xs text-gray-600"
//           dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
//         ></p>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import { useNavigate } from "react-router";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-purple-300/50 transition-all duration-300 cursor-pointer bg-white"
    >
      <img src={image} alt="" className="aspect-video w-full object-cover" />

      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-gradient-to-r from-purple-100 to-purple-200 rounded-full text-purple-800 text-xs font-medium">
        {category}
      </span>

      <div className="p-5">
        <h5 className="mb-2 text-gray-900 font-semibold text-lg">{title}</h5>
        <p
          className="mb-3 text-gray-600 text-sm"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
