import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const Context = createContext(null);

const ContextApi = ({ children }) => {
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const [token, setToken] = useState();
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextApi;

export const useContextData = () => {
  return useContext(Context);
};
