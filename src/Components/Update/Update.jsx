import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';

const Update = () => {
  const singleInfo = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;


    fetch(`https://autobotsserver.vercel.app/getmytoys/${singleInfo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, quantity, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
            toast("Data Updated Successfully !");
        }
      });
  };

  return (
    <div className="my-5 p-5">
      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label htmlFor="text" className="sr-only">
            Price
          </label>
          <div className="relative">
            <input
              name="price"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter new price"
              type="number"
              defaultValue={singleInfo.price}
            />
          </div>
        </div>
        <div>
          <label htmlFor="text" className="sr-only">
            Available quantity
          </label>
          <div className="relative">
            <input
              name="quantity"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter new quantity"
              type="number"
              defaultValue={singleInfo.quantity}
            />
          </div>
        </div>
        <div>
          <label htmlFor="text" className="sr-only">
            Detail Description
          </label>
          <div className="relative">
            <input
              name="description"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter new Description"
              defaultValue={singleInfo.description}
            />
          </div>
        </div>
        <div>
          <input
            className="w-full rounded-lg cursor-pointer bg-indigo-500 p-4 pe-12 text-sm font-semibold text-white shadow-sm"
            type="submit"
            value="UPDATE"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
