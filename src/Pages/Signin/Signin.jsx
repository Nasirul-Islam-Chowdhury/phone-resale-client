import React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Auth } from "../../Contexts/AuthContext";
const Signin = () => {
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setloginUserEmail] = useState("")
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const {loginUSer} = useContext(Auth);
  const [userEmail, setUserEmail] = useState(" ")
  const {handleGooglesignin, resetPassword} = useContext(Auth);

  const googleSignin = ()=>{
    handleGooglesignin()
    .then(res=>{
      toast("User Logged in Succesfully")
      console.log(res.user)
 
    })
    .catch(err=>console.log(err))
  }
const handleResetPass = ()=>{
  if(userEmail){
    resetPassword(userEmail)
    .then(res=>{
      toast.success("Please check your email")
    })
    .catch(err=>console.log(err))
  }
  if(userEmail == " "){
    return setLoginError("Please enter your email to reset")
  }
 
}
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setLoginError(" ")
    loginUSer(data.email, data.password)
    .then(result=>{
      toast.success("User Logged in successfully")
      setloginUserEmail(data.email)
      navigate(from, { replace : true})
      console.log(result.user)})
    .catch(error=>{
      setLoginError(error.message)
      console.log(error)})
  };
 
  return (
    <div className="h-[800px] flex justify-center items-center text-black">
      <div className="w-96 p-5">
        <h2 className="text-4xl text-center mb-10">Signin</h2>

      <div>
        <form className="text-black" onSubmit={handleSubmit(handleLogin)}>
    
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
            
            // onSubmit={handleresetBlur}
            defaultValue="" {...register("email" ,{ required: 'Email is required' })}
            aria-invalid={errors.email ? "true" : "false"} 
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full  text-black"
              onChange={(e)=>setUserEmail(e.target.value)}
            />
           
          </div>
          {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
            defaultValue="" {...register("password" ,{ required: "Password is required",minLength:{value: 6, message: "Password must be 6 characters or more"} } )}
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full text-black "
            />
             {errors.password && <p className="text-red-600 mt-1" role="alert">{errors.password?.message}</p>}
               <label className="label">
              <span  className="label-text text-black">Forget Password? <span onClick={handleResetPass} className="cursor-pointer underline">Reset</span></span>
            </label>
          </div>
<div>
  <p className="text-red-600 my-2">{loginError}</p>
</div>
          <input className="btn btn-accent w-full" type="submit" value="Signin" />
        </form>
        <p  className="text-center text-black mt-3">New to PhoneSwapZone? <Link to="/signup">signup</Link></p>
      </div>
      <div className="divider text-black">OR</div>
      <div>
        <button onClick={googleSignin} className="btn btn-outline btn-accent w-full">
          Continue with google
        </button>
      </div>
      </div>
    </div>
  );
};

export default Signin;