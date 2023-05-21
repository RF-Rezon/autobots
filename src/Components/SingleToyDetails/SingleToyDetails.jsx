import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../Title/Title";


const SingleToyDetails = () => {
  Title("Single Toy Details")
   const singleCardData = useLoaderData();
    const  { url, tname, sname, semail, price, rating, quantity, description } = singleCardData;
  return (
    <div className="my-5">
    <div className="h-full p-20 bg-base-200">
        <div className="w-full flex items-center justify-evenly flex-col md:flex-row space-x-10 space-y-10 md:space-y-0">
          <div className="w-3/5"><img src={url} className="rounded-lg shadow-2xl h-full w-full" /></div>
          <div>
            <h1 className="text-3xl md:text-4xl  font-bold text-gray-800 pb-6">{tname}</h1>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Seller</p>
              <p className="text-xl font-medium text-gray-600">{sname}</p>
            </div>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Seller Email</p>
              <p className="text-xl font-medium text-gray-600">{semail}</p>
            </div>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Price</p>
              <p className="text-xl font-medium text-gray-600">{price}</p>
            </div>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Rating</p>
              <p className="text-xl font-medium text-gray-600">{rating}</p>
            </div>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Quantity</p>
              <p className="text-xl font-medium text-gray-600">{quantity}</p>
            </div>
            <div className="py-2 space-y-2">
              <p className="text-3xl font-semibold text-gray-700">Description</p>
              <p className="text-xl font-medium text-gray-600">{description}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
