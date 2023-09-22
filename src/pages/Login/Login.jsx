import { useContext } from "react";
import { FaFacebookF, FaGoogle, } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {signInUser, googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result => {
      const user = result.user;
      toast.success("Login successful");
      form.reset();
      navigate(from, { replace: true });
    })
    .catch(err => {
      toast.error("Login Failed");
    })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      toast.success("Login successful");
      navigate(from, { replace: true });
    })
    .catch(err => {
      toast.error("Login Failed");
    })
  }
  return (
    <div className="bg-[#EFF0F5] flex justify-center items-center py-10">
      <div className="w-[60%]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl">Welcome to Daraz! Please login.</h3>
          <p className="text-sm text-gray-400">
            New member?{" "}
            <Link to="/register" className="text-[#5ab8ee]">
              Register
            </Link>{" "}
            here.
          </p>
        </div>
        <Toaster></Toaster>
        <div className="bg-white p-8">
          <form onSubmit={handleLogin}>
            <div className="grid grid-cols-2">
              <div>
                <div className="mb-10">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Your email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Please enter your Email"
                    className="border-2 border-gray-200 p-2 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Your Password*
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    className="border-2 border-gray-200 p-2 w-full"
                  />
                </div>
                <p className="mt-4 text-sm text-right text-[#5ab8ee]">Reset your password</p>
              </div>
              <div className="ml-16">
                <button className="block bg-[#F85606] text-white text-xl font-semibold py-2.5 w-full mt-6 mb-2 rounded">
                  Login
                </button>
                <p className="text-sm text-gray-400">or, login with</p>
                <button className="bg-[#3B5998] text-white text-xl font-semibold py-2.5 w-full my-4 rounded flex items-center justify-center">
                  <span className="mr-10"><FaFacebookF></FaFacebookF></span>Facebook
                </button>
                <button className="bg-[#D34836] text-white text-xl font-semibold py-2.5 w-full rounded flex items-center justify-center" onClick={handleGoogleSignIn}>
                  <span className="mr-10"><FaGoogle></FaGoogle></span>Google 
                </button>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
