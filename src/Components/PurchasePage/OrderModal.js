import React, { useState } from "react";
import loading_tow from "../../Assets/Svg/loading-2.svg";
import { commonButton } from "../../Hooks/Classes";

const OrderModal = ({
  data,
  user,
  loadingOrder,
  setLoadingOrder,
  Setimage,
  handleOrder,
}) => {
  //console.log(data, user);

  const [error, setError] = useState("");

  const maximum = data.quantity;
  const minimum = data.minimum;

  const [subBtnDisable, setSubBtnDisable] = useState(false);
  const orderQuantity = e => {
    if (+e > maximum) {
      setSubBtnDisable(true);
      setError(`You can't order more then ${maximum}`);
    } else if (+e < minimum) {
      setSubBtnDisable(true);
      setError(`You can't order less then ${minimum}`);
    } else {
      setSubBtnDisable(false);
      setError("");
    }
  };

  const { displayName, email, phoneNumber, photoURL } = user;

  return (
    <div>
      <input
        type="checkbox"
        id="orderModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-2">
          <div className="modal-action mt-0 ">
            <label
              htmlFor="orderModal"
              className="btn btn-sm btn-circle "
            >
              ✕
            </label>
          </div>
          <div className="">
            <div className="card mx-auto flex-shrink-0 max-w-sm ">
              <form onSubmit={handleOrder}>
                <div className="card-body py-0 px-0">
                  {/* address, phone number, and other necessary information (if applicable) to place the order or complete the purchase. */}
                  <div className="form-control">
                    <span className="text-xs text-white ml-2 mb-1 ">
                      {" "}
                      Your Name{" "}
                    </span>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder="Name"
                      defaultValue={displayName || ""}
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <span className="text-xs text-white ml-2 mb-1 ">
                      {" "}
                      Your Address
                    </span>
                    <input
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <span className="text-xs text-white ml-2 mb-1 ">
                      {" "}
                      Phone{" "}
                    </span>
                    <input
                      type="text"
                      name="Phone"
                      required
                      placeholder="Phone"
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <span className="text-xs text-white ml-2 mb-1 ">
                      {" "}
                      Product Name{" "}
                    </span>
                    <input
                      type="text"
                      name="Product"
                      placeholder="product name"
                      Value={data.name}
                      readOnly
                      className="input input-bordered opacity-75"
                    />
                  </div>

                  <div className="form-control">
                    <span className="text-xs text-white ml-2 mb-1 ">
                      {" "}
                      Product Quantity{" "}
                    </span>
                    <input
                      type="number"
                      onChange={e => orderQuantity(e.target.value)}
                      name="Quantity"
                      min={minimum}
                      max={maximum}
                      placeholder="product name"
                      Value={minimum}
                      className="input input-bordered opacity-75"
                    />
                  </div>
                  {error && (
                    <p className="text-center -mt-1 -mb-6 text-red-500">
                      {" "}
                      {error}{" "}
                    </p>
                  )}

                  <div className="form-control mt-6">
                    {"!loadingOrder" ? (
                      <input
                        disabled={subBtnDisable}
                        type="submit"
                        value={"Submit order"}
                        className={`btn ${commonButton}  `}
                      />
                    ) : (
                      <button
                        disabled={loadingOrder}
                        className={commonButton}
                      >
                        {" "}
                        <img
                          className="h-10"
                          src={loading_tow}
                          alt=""
                        />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
