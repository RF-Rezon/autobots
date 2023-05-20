import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyToys = () => {
    const data = useLoaderData();
    const [users, setUsers] = useState(data)

  const handleDelete =(id)=>{

    fetch(`http://localhost:3000/getmytoys/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Data deleted successfully!");
            const filteredData = users.filter(user => user._id !== id)
            setUsers(filteredData)
          }
        });
  }

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
                  <label htmlFor="my-modal-3">
                      <a
                        onClick={() => handleViewDetails(data._id)}
                        className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                      >
                        Update
                      </a>
                  </label>
                  <a onClick={()=> handleDelete(data._id)}
                    className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 cursor-pointer m-5"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
 
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal bg-white bg-opacity-75">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 text-white">
              ✕
            </label>
            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
