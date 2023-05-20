import React from 'react';

const Update = () => {


    const handleUpdate =(e)=>{
        e.preventDefault();
        const form =  e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
        const three = {price, quantity, description}
        console.log(three)
      }

    return (
        <div className="modal bg-white bg-opacity-75">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-0 top-0 text-white">
              ✕
            </label>
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
                    //   defaultValue={data?.price}
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
                    //   defaultValue={data.quantity}
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
                    //   defaultValue={data.description}
                    />
                  </div>
                </div>
                <div>
                    <input className="w-full rounded-lg cursor-pointer bg-indigo-500 p-4 pe-12 text-sm font-semibold text-white shadow-sm" type="submit" value="UPDATE" />
                </div>
            </form>
          </div>
        </div>
    );
};

export default Update;