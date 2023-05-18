import React from "react";

const Carosul = () => {
  return (
    <div className="my-10 mb-16" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <div className="h-96 carousel carousel-vertical rounded-box gap-y-6">
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img src="https://media.gettyimages.com/id/77448305/photo/a-transformer-toy-made-by-hasbro-is-offered-for-sale-at-a-toys-r-us-store-october-22-2007-in.jpg?s=612x612&w=gi&k=20&c=2gEXRVcjRRiWqgafRhwDUot-dE2A1OwN7KOolbLVPhk="  className="w-full"/>
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://thumbs.dreamstime.com/b/kuala-lumpur-malaysia-october-interior-aeon-shopping-mall-transformers-toys-shelves-shopping-mall-transformers-toys-129204977.jpg" />
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://thumbs.dreamstime.com/b/transformers-toys-toy-shelf-kuala-lumpur-malaysia-march-143872734.jpg" />
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://www.transformertoys.co.uk/images/miscellaneous/toy-groupshots/collection-201105/DSCF0512.JPG" />
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://news.tfw2005.com/wp-content/uploads/sites/10/2023/05/Transformers-Buzzworhty-Bumblebee-Rise-Of-The-Beasts-Smash-Changers-Scourge-Found-At-US-Retail.jpeg" />
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://news.tfw2005.com/wp-content/uploads/sites/10/2023/03/Buzzworhty-Bumblebee-ROTB-Jungle-Mission-3-Pack-01.jpg" />
        </div>
        <div className="carousel-item h-full w-3/5 mx-auto">
          <img  className="w-full" src="https://thumbs.dreamstime.com/b/transformers-plastic-toys-sell-supermarket-minsk-belarus-transformers-plastic-toys-sell-supermarket-255794699.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Carosul;
