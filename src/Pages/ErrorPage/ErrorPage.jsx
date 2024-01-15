import React, { useContext } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Auth } from "../../Contexts/AuthContext";
import Loading from "../../SharedComponents/Loading/Loading";

const ErrorPage = () => {
  const { user, logOut, loading, loader } = useContext(Auth);
  const navigate = useNavigate();
  const handleSignout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  const btn = (
    <div>
      <div className="flex gap-4 my-4 justify-center">
        <button onClick={handleSignout} className="btn btn-accent text-white">
          Signout
        </button>
      </div>
    </div>
  );
  const error = useRouteError();
    if(loading || loader){
      return <Loading />
    }

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="flex justify-center items-center min-h-screen text-black ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold ">
              This page doesn't exist!
            </h1>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black ">
      <h1 className="text-4xl font-semibold">Something went wrong</h1>
      <p className="my-2">You Need to Signout and login back</p>
      <div>{btn}</div>
    </div>
  );
};

export default ErrorPage;
