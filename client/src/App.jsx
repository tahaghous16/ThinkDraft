import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/admin/Dashboard";
import Layout from "./pages/admin/Layout";
import ListBlog from "./pages/admin/ListBlog";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { useContextData } from "./context/ContextApi";

const App = () => {
  const { token } = useContextData();
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/admin" element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="listblog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
