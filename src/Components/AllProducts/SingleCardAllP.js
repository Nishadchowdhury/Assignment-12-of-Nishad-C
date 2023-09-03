import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleCardAllP = ({ product }) => {
  const {
    minimum,
    name,
    picture,
    price,
    quantity,
    description,
    _id,
  } = product;

  const [showInfo, setShow] = useState(false);

  const showDetails = () => {
    setShow(true);
  };
  const HideDetails = () => {
    setShow(false);
  };

  return (
    <div
      onMouseOver={showDetails}
      onMouseLeave={HideDetails}
      className="card w-56  bg-base-100 shadow-xl image-full   "
    >
      <figure className="relative">
        <img
          className="w-full z-20 opacity-90 h-full overflow-hidden"
          src={picture}
          alt="Shoes"
        />
      </figure>
      {showInfo && (
        <div
          className={
            "card-body p-3 animation bg-black bg-opacity-40 relative"
          }
        >
          <h2
            className={`card-title text-white text-lg ${
              +quantity === 0 && "mt-6"
            } `}
          >
            {name}
          </h2>
          <p className=" text-white">
            {/* {description?.slice(0, 50) + "..."} */}
            <h3 className="text-base bg-gray-500 bg-opacity-50 rounded">
              {" "}
              Per Item:- {price}{" "}
            </h3>
            <h3 className="text-base bg-gray-500 bg-opacity-50 rounded">
              left in stoke:- {quantity}
            </h3>
          </p>

          <div className="card-actions justify-end  text-white">
            <Link
              to={`/order/${_id}`}
              className={`btn btn-sm btn-primary p-1 ${
                +quantity === 0 && "hidden"
              }`}
            >
              Buy Now
            </Link>
          </div>
          {+quantity === 0 && (
            <span className="bg-red-500 text-white px-2 py-1 absolute w-auto h-auto top-0 left-0 ">
              Out Of Stock
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleCardAllP;
