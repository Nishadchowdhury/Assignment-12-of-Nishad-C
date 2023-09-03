import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import rootUrl from "../../Hooks/RootUrl";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1AKaFvzbbpnw6as8zL4ESyMeYTSLpi4fdgG8699CatvCDYs9NoRx2ZXoAripSGuC8F2kzHelz9qXGyhX9j6Rl800hYDmX1Fd"
);

const Payment = ({
  dataForPaymentModal,
  setDataForPaymentModal,
  refetch,
}) => {
  const [loading, setLoading] = useState(false);

  const { picture, _id, Product, Quantity, price, userName } =
    dataForPaymentModal;
  const total = +price * +Quantity;

  const url = `${rootUrl}`;

  // const { data: }

  return (
    <div className="bg-glass">
      <input
        type="checkbox"
        id="payment-modal"
        className="modal-toggle"
      />
      <div className=" lg:ml-80 md:ml-40 modal z-50">
        <div className="modal-box w-11/12 ">
          <div>
            <div className="modal-action mt-0">
              <label
                onClick={() => setDataForPaymentModal(null)}
                className="btn lg:btn-md btn-sm  lg:text-lg text-xs btn-circle"
                disabled={loading}
              >
                ✕
              </label>
            </div>
            <div className="flex w-full justify-center items-center flex-col gap-12 ">
              <div className=" flex justify-center shadow-2xl rounded-xl px-4 border-l-zinc-500 ">
                <figure className="">
                  <img
                    src={picture}
                    className="lg:w-40  w-20 h-20 rounded-2xl lg:h-full  overflow-hidden"
                    alt="Movie"
                  />
                </figure>

                <div className=" lg:p-5 p-3 pr-0">
                  <h2 className="card-title lg:text-xl text-xs  text-warning ">
                    {" "}
                    {Product}{" "}
                  </h2>
                  <p className="text-success lg:text-base text-xs mt-2">
                    Total Cost :-{" "}
                    <span className=" text-black rounded-lg bg-white  text-sm  lg:p-2 p-1">
                      {total} USD{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="  shadow-2xl rounded-xl border-l-zinc-500 w-full lg:w-[450px] lg:p-5 lg:py-2 min-h-28">
                <Elements stripe={stripePromise}>
                  <CheckOutForm
                    dataForPaymentModal={dataForPaymentModal}
                    s
                    etDataForPaymentModal={setDataForPaymentModal}
                    setLoading={setLoading}
                    loading={loading}
                    refetch={refetch}
                  />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

{
  /* <label htmlFor="payment-modal" className="btn">Yay!</label> */
}
