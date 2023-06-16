import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/AllRoutes/AllRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center"  />
    </div>
  );
};

export default App;
