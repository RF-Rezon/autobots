import React from "react";
import { toast } from 'react-toastify';

const AddAToy = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const url = form.url.value;
    const tname = form.tname.value;
    const sname = form.sname.value;
    const semail = form.semail.value;
    const scategory = form.scategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    fetch("http://localhost:3000/posttoys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, tname, sname, semail, scategory, price, rating, quantity, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("New toy added!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">SELLARS PAGE</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">Here you can post about toys.</p>

          <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
              <label htmlFor="url" className="sr-only">
                Picture URL
              </label>

              <div className="relative">
                <input
                  name="url"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Picture URL"
                  type="url"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Toy Name
              </label>

              <div className="relative">
                <input
                  name="tname"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Toy Name"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Seller Name
              </label>

              <div className="relative">
                <input
                  name="sname"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Seller Name"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Seller Email
              </label>

              <div className="relative">
                <input
                  name="semail"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Seller Email"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Sub-category
              </label>

              <div className="relative">
                <input
                  name="scategory"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Sub-category"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Price
              </label>

              <div className="relative">
                <input
                  name="price"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Price"
                  type="number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Rating
              </label>

              <div className="relative">
                <input
                  name="rating"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Rating"
                  type="number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="sr-only">
                Available Quantity
              </label>

              <div className="relative">
                <input
                  name="quantity"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Available Quantity"
                  type="number"
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
                  placeholder="Enter Detail Description"
                  type="text"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              POST TOYS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
