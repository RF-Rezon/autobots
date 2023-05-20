import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AllToys = () => {
    
   const data =  useLoaderData();
   const navigate = useNavigate();
  const {user} = useContext(AuthContext);
   console.log(data)

   const handleViewDetails = (id) => {

    if (!user) {
      navigate('/login');
    }else{
        navigate(`/alltoys/${id}`);
    }
  };

    // console.log(data[0])
    // const {tname, sname, scategory, price, quantity} = data[0];
  return (
    <div>
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
          {data.map((data, index) => (
          <tr className="text-center" key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.sname}</td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.tname}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.scategory}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.price}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.quantity}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a onClick={() => handleViewDetails(data._id)}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 cursor-pointer"
                >
                  View Details
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
