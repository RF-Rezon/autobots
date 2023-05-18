import React from "react";

const Header = () => {
  return (
    <div data-aos="fade-up">
      <section className="relative bg-[url(https://idigitalcitizen.files.wordpress.com/2009/06/1024x768-autobots-group.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-80 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto flex justify-center lg:h-screen lg:items-center lg:px-8 p-32 md:p-0">
          <div className="text-center">
            <div>
              <h1 className="text-3xl text-blue-600 md:font-extrabold font-bold mb-3">
                Buy amazing transformars toys!{" "}
              </h1>
              <strong className="text-white text-3xl md:font-extrabold font-bold mb-5">For the best price!</strong>
            </div>

            <div className="text-center px-5 py-4 mx-auto my-6">
              <a
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                href="/alltoys"
              >
                Percase your toys here!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
