import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = use(AuthContext);
  const [showPass , setShowPass] = useState(false)
  const navigate = useNavigate();
  const location = useLocation()
  // console.log(location.state)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Successfully Login')
        navigate(`${location.state ?  location.state : '/'}`);
      })
      .catch((error) => {
         if (error.code == "auth/invalid-credential")
          return toast.error("Incorrect email or password");
        if (error.code == "auth/invalid-email")
          return toast.error("Please enter your email");
        if (error.code == "auth/missing-password")
          return toast.error("Please enter your password");
        toast.error("Something went wrong. Please try again.");
      });
  };

  const handleGoogleLogin = () =>{
      googleLogin().then(() => {
              toast.success('Successfully Login')
              navigate(`${location.state ?  location.state : '/'}`);
            })
            .catch((error) => {
              toast.error(error)
            });
    }
  return (
    <div className="flex justify-center items-center lg:absolute lg:top-0 lg:right-0 lg:w-11/12 pt-10 md:pt-15 lg:mt-5">
      {/* side text */}
      <div>
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-secondary-content mb-5">
          Please Login
        </h2>
        <div className="card bg-primary/40 shrink-0 shadow shadow-primary hover:shadow-lg duration-500 transition-shadow">
          <div className="card-body text-secondary-content w-[300px] sm:w-96 md:w-[400px]">
            {/* form */}
            <form onSubmit={handleLogin} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-white"
                placeholder="Email"
                name="email"
              />
              {/* password */}
              <div className="relative">
                <label htmlFor="password" className="block">
                  Password
                </label>
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    name="password"
                    placeholder="Password"
                className="input  border-2 border-primary-300 focus:border-[#88d66ce8] focus:outline-none focus:ring-4 focus:ring-[#88d66c5b] bg-white placeholder:text-gray-300 placeholder:text-xs"
                  />
                  <button
                    onClick={() => setShowPass(!showPass)}
                    type="button"
                    className="absolute text-gray-400 btn btn-xs btn-ghost z-10 right-7 top-6 hover:bg-white"
                  >
                    {showPass ? (
                      <FaRegEyeSlash size={15} />
                    ) : (
                      <FaRegEye size={15} />
                    )}
                  </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn button-green " type="submit">Login</button>
            </form>
            {/* social login */}
            <div className="flex items-center my-3 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-primary"></div>
              <p className=" text-sm text-center">OR</p>
              <div className="flex-1 h-px sm:w-16 bg-primary"></div>
            </div>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-secondary-content mb-2 border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-xs sm:text-base">
              Don't have an account? Please
              <Link
                to="/auth/register"
                state={location.state || "/"}
                className="underline font-semibold text-base"
              >
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
