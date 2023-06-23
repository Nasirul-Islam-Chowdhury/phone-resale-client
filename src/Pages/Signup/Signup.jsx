import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Auth } from "../../Contexts/AuthContext";
import useToken from "../../Hooks/useToken";
const Signup = () => {
  const [check, setCheck] = useState();
  const [signupError, setSignupError] = useState("");
  const { handleGooglesignin } = useContext(Auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [createdUserEmail, setcreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate(from, {replace: true})
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, handleUpdateProfile } = useContext(Auth);
  const saveuser = (email, name, check) => {
    const users = { email, name, role:check };
    fetch("https://phone-resale-server-nine.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        setcreatedUserEmail(email);
     
      });
  };
  const googleSignin = () => {
    handleGooglesignin()
      .then((res) => {
        toast.success("User Logged in Succesfully");
        saveuser(res.user.email, res.user.displayName, "Buyer");
        setcreatedUserEmail(res.user.email);
      })
      .catch((err) => console.log(err));
  };

  const handleSignup = (data) => {
    console.log(data.buyer, data.seller);
    setSignupError(" ");
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          displayName: data.name,
        };
        handleUpdateProfile(userInfo)
          .then(() => {
            saveuser(data.email, data.name, check);
            toast("User Created Succesfully");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignupError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center text-black">
      <div className="w-96 p-5">
        <h2 className="text-4xl text-center mb-10">Signup</h2>
        <div className="text-black">
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full mb-2 ">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                defaultValue=""
                {...register("name", { required: "name is required" })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}

            <div className="form-control w-full  mb-2">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                defaultValue=""
                {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full "
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
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                    message:
                      "Password must be includes numbers, uppercase, lowercase and special characters",
                  },
                })}
                type="password"
                placeholder="Type password here"
                className="input input-bordered w-full "
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>

<div>
  <input type="radio" id="Seller" name="user" value="Seller" onChange={e=>setCheck(e.target.value)}/>  
  <label className="mx-2 text-sm" htmlFor="Seller">I am a Seller </label><br />
  <input  type="radio" id="Buyer" name="user" value="Buyer" onChange={e=>setCheck(e.target.value)}/>
   <label className="text-sm mx-2" htmlFor="Buyer">I am a Buyer</label>
</div>

            <div>
              <p className="text-red-600 my-2">{signupError}</p>
            </div>
            <input
              className="btn btn-neutral w-full"
              type="submit"
              value={"Sign up"}
            />
          </form>
          <p className="text-center text-black mt-3">
            New to PhoneSwapZone? <Link to="/signin">Signin</Link>
          </p>
        </div>
        <div className="divider text-black">OR</div>
        <div>
          <button onClick={googleSignin} className="btn btn-accent w-full">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
