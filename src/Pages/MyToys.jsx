import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../Components/Title/Title";

const MyToys = () => {
  Title("My Toys")
  const data = useLoaderData();
  const [users, setUsers] = useState(data);
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/mytoys/${id}`);
  };

  const handleDelete = async (id) => {
    const x = confirm("Are you sure want to delete?");
    if(!x){
        return;
    }

    await fetch(`https://autobotsserver.vercel.app/getmytoys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast("Toy Deleted Successfully");
          const filteredData = users.filter((user) => user._id !== id);
          setUsers(filteredData);
        }
      });

    
  };

  return (
    <div className="my-5">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="text-center">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Seller</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Toy Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Sub Category</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Available Quantity</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((data, index) => (
              <tr className="text-center" key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.sname}</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.tname}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.scategory}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.price}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.quantity}</td>
                <td className="whitespace-nowrap px-4 py-2 space-x-6">
                  <button
                    onClick={() => handleUpdate(data._id)}
                    className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(data._id)}
                    className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 cursor-pointer m-5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
