import { FaFacebookF, FaGoogle, } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-[#EFF0F5] flex justify-center items-center py-10">
      <div className="w-[60%]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl">Create your Daraz Account</h3>
          <p className="text-sm text-gray-400">
            Already member?{" "}
            <Link to="/login" className="text-[#5ab8ee]">
              Login
            </Link>{" "}
            here.
          </p>
        </div>
        <div className="bg-white p-8">
          <form>
            <div className="grid grid-cols-2">
              <div>
                <div className="mb-10">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Your Name*
                  </label>
                  <input
                    type="name"
                    name="name"
                    id=""
                    placeholder="Please enter your name"
                    className="border-2 border-gray-200 p-2 w-full"
                  />
                </div>
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
                    id=""
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
                    id=""
                    placeholder="Please enter your password"
                    className="border-2 border-gray-200 p-2 w-full"
                  />
                </div>
              </div>
              <div className="ml-16">
                <button className="block bg-[#F85606] text-white text-xl font-semibold py-2.5 w-full mt-6 mb-2 rounded">
                  Sign Up
                </button>
                <p className="text-sm text-gray-400">or, signup with</p>
                <button className="bg-[#3B5998] text-white text-xl font-semibold py-2.5 w-full my-4 rounded flex items-center justify-center">
                  <span className="mr-10"><FaFacebookF></FaFacebookF></span>Facebook
                </button>
                <button className="bg-[#D34836] text-white text-xl font-semibold py-2.5 w-full rounded flex items-center justify-center">
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

export default Register;