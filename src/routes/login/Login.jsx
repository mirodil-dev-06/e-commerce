import { FiEye, FiEyeOff } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import loginImage from "../../images/login_img.png";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "../../utils/Utils";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await instance.post("/auth/login", { username, password });
      console.log("LOGIN RESPONSE:", res.data);

      const { accessToken, refreshToken, message } = res.data;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch({
          type: "LOGIN_USER",
          payload: {
            user: res.data.user || {},
            accessToken,
            refreshToken,
          },
        });

        toast.success(message || "Login successful!");
        navigate("/admin");
      } else {
        toast.error("Token topilmadi! Backend javobini tekshiring.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed!");
    } finally {
      setIsLoading(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={loginImage}
            alt="Login illustration"
            className="w-[80%] md:w-[70%] lg:w-[60%] object-contain"
          />
        </div>
        <div className="w-1/4 md:w-1/2 bg-white shadow-lg rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h1>

          <form ref={form} onSubmit={loginUser} className="space-y-5">
            <input
              type="text"
              placeholder="Your username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />

            <div className="relative">
              <input
                type={isPasswordOpen ? "text" : "password"}
                placeholder="Your password"
                value={password}
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <div
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsPasswordOpen(!isPasswordOpen)}
              >
                {isPasswordOpen ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center py-3 rounded-lg font-semibold text-white transition-all ${isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {isLoading ? (
                <AiOutlineLoading className="animate-spin text-xl" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
