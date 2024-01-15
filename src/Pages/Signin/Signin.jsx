import React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Auth } from "../../Contexts/AuthContext";
import useToken from "../../Hooks/useToken";
import Loading from "../../SharedComponents/Loading/Loading";
const Signin = () => {
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setloginUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { loginUSer, loader } = useContext(Auth);
  const [userEmail, setUserEmail] = useState(" ");
  const { resetPassword } = useContext(Auth);
  const [token] = useToken(loginUserEmail);
  if (token) {
    return navigate(from, { replace: true });
  }


  const handleResetPass = () => {
    if (userEmail) {
      resetPassword(userEmail)
        .then((res) => {
          toast.success("Please check your email");
        })
        .catch((err) => console.log(err));
    }
    if (userEmail == " ") {
      return setLoginError("Please enter your email to reset");
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setLoginError(" ");
    loginUSer(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success("User Logged in successfully");
        setloginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error);
        return setLoginError(error.message);
      });
  };

  return (
    <div className="h-[800px] font-primary flex lg:flex-row flex-col gap-10  justify-center items-center text-black my-10">
      <div className="w-96 p-5 border-primary rounded-md border-2">
        <h2 className="text-4xl text-center font-semibold mt-8">
          Welcome Back!
        </h2>
        <h2 className="text-2xl text-center mb-4">Signin</h2>
        <div>
          <form className="text-black" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                // onSubmit={handleresetBlur}
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full border-gray-300  text-black"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}

            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                defaultValue=""
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or more",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered border-gray-300 w-full text-black "
              />
              {errors.password && (
                <p className="text-red-600 mt-1" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text text-black">
                  Forget Password?{" "}
                  <span
                    onClick={handleResetPass}
                    className="cursor-pointer underline"
                  >
                    Reset
                  </span>
                </span>
              </label>
            </div>
            <div>
              <p className="text-red-600 my-2">{loginError}</p>
            </div>
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Signin"
            />
          </form>
          <p className="text-center text-black mt-3">
            New to PhoneSwapZone?{" "}
            <Link className="text-primary font-bold" to="/signup">
              signup
            </Link>
          </p>
        </div>
        {/* <div className="divider text-black">OR</div> */}
        {/* <div>
        <button onClick={googleSignin} className="btn btn-outline btn-accent w-full">
          Continue with google
        </button>
      </div> */}
      </div>
      <div className="lg:w-80 w-96 h-[470px] p-5 border-primary rounded-md border-2 flex justify-center items-start flex-col">
        <h1 className="text-xl font-bold text-center font-primary border-b-2 mb-4">
          Demo Users
        </h1>
        <h3>
          Buyer Email: <span className="font-semibold">a@gmail.com</span>
        </h3>
        <h3>
          Buyer Password: <span className="font-semibold">1212@@</span>
        </h3>

        <div className="mt-4">
          <h3>
            Seller Email:{" "}
            <span className="font-semibold">seller2@gmail.com</span>
          </h3>
          <h3>
            Seller Password: <span className="font-semibold">1212@@</span>
          </h3>
        </div>
        <div className="mt-4">
          <h3>
            Admin Email: <span className="font-semibold">nasir1@gmail.com</span>
          </h3>
          <h3>
            Seller Password: <span className="font-semibold">1212@@</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signin;
