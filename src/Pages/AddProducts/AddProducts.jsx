import React, { useContext, useState } from "react";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import { Auth } from "../../Contexts/AuthContext";
import { toast } from "react-hot-toast";
import Loading from '../../SharedComponents/Loading/Loading'
const AddProducts = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useContext(Auth);
  const [condition, setCondition] = useState("");
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const navigate = useNavigate()
  let year = date.getFullYear();
  let PostDate = `${day}-${month}-${year}`;
  const imgHostKey = import.meta.env.VITE_imgbb_key;
  
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const name = form.name.value;
    const subcategory = form.category.value;
    const usedYear = form.usedYears.value;
    const description = form.description.value;
    const previous_price = parseInt(form.previous_price.value);
    const price = parseInt(form.price.value);
    const storage = form.storage.value;
    const number = form.number.value;
    const location = form.location.value;
    const model = form.model.value;
    const photo = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    if (previous_price < price || previous_price == price)
      return toast.error(
        "Resale price can not be bigger than/ qual to Previous price"
      );

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            sellerName,
            sellerEmail,
            name,
            subcategory,
            condition,
            previous_price,
            description,
            price,
            storage,
            number,
            location,
            model,
            usedYear,
            PostDate,
            images: [imgData.data.url],
          };
          fetch("https://phone-resale-server.onrender.com/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              autherization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                form.reset();
                setLoading(false)
                toast.success(`${name} added successfully`);
                navigate('/dashboard/myProducts')
              }
            }
        
            ); 
          } 
        }
        );
        if(loading){
          return <Loading/>
        }
  };
  return (
    <div className="flex flex-col items-center min-h-100vh my-10 pt-6 sm:justify-center sm:pt-0">
      <div className="w-full p-8 mt-2 overflow-hidden bg-white shadow-2xl max-w-lg rounded-2xl text-black">
        <form onSubmit={handleAdd}>
          <div>
            <div>
              <Link>
                <h3 className="text-3xl font-bold text-center">Add Mobile</h3>
              </Link>
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Seller Name</h1>
              <input
                defaultValue={user?.displayName}
                readOnly
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Seller Email</h1>
              <input
                defaultValue={user?.email}
                readOnly
                required
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg  outline-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Device Name</h1>
              <input
                required
                name="name"
                type="text"
                className="w-full p-2 border rounded-lg  outline-none"
                placeholder="Your device name"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Device Category/Brand</h1>
              <input
                required
                name="category"
                type="text"
                className="w-full p-2 border rounded-lg  outline-none"
                placeholder="Your device category/brand"
              />
              <small>Note: Your spelling must be correct</small>
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Description</h1>
              <textarea
                required
                name="description"
                placeholder="Products Description"
                className="textarea textarea-bordered bg-white h-36 w-full  outline-none"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <h1 className="font-semibold p-1">Mobile Number</h1>
                <input
                  required
                  name="number"
                  type="number"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your mobile number"
                />
              </div>
              <div>
                <h1 className="font-semibold p-1">Location</h1>
                <input
                  required
                  name="location"
                  type="text"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your meeting location"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <h1 className="font-semibold p-1">Years of use</h1>
                <input
                  required
                  name="usedYears"
                  type="number"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Years of use"
                />
              </div>
              <div>
                <h1 className="font-semibold p-1">Posting Date</h1>
                <input
                  required 
                  readOnly
                  defaultValue={PostDate}
              
                  type="text"
                  className="w-full p-2 border rounded-lg  outline-none"
           
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <h1 className="font-semibold p-1">Storage</h1>
                <input
                  required
                  name="storage"
                  type="text"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your device storage"
                />
              </div>
              <div>
                <h1 className="font-semibold p-1">Model</h1>
                <input
                  required
                  name="model"
                  type="text"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your device model"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div>
                <h1 className="font-semibold p-1">Previous Price</h1>
                <input
                  required
                  name="previous_price"
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your device price"
                />
              </div>
              <div>
                <h1 className="font-semibold p-1">Selling Price</h1>
                <input
                  required
                  name="price"
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your device price"
                />
              </div>
            </div>
            <div className="mt-4">
              <select
                required
                onChange={(e) => setCondition(e.target.value)}
                className="select select-bordered w-full bg-white"
              >
               
                <option className="hidden" selected>What is your device condition?</option>
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Photo</h1>
              <input
                required
                name="photo"
                type="file"
                className="w-full p-2 border rounded-lg  outline-none"
                placeholder="your subject"
              />
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#252422] rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
