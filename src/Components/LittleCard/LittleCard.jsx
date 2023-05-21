import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';

const LittleCard = ({ data }) => {
  console.log(data);
  // const data =  useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (user) {
      return;
    } else {
     toast("You have to log in first to view details")
    }
  };

  return (
    <div className="m-5 md:max-w-5xl md:mx-auto">
      <div href="#" className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div>
          <h3 className="text-lg text-center mb-5 font-bold text-gray-900 sm:text-xl">Autobots 1</h3>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://i.ibb.co/3yhPNGp/715p3-Pf-EEm-L-AC-UL400.jpg"
              className="h-24 w-24 rounded-lg object-cover shadow-sm"
            />
          </div>
          <div className="mb-5">
            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">3.8</dt>
                <dd className="text-xs text-gray-500">Rating</dd>
              </div>
            </dl>
            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">100tk</dt>
                <dd className="text-xs text-gray-500">Price</dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
          <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 mb-5 mt-3"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;
