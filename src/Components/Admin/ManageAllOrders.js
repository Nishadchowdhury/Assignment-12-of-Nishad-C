import React, { useState } from "react";
import { useQuery } from "react-query";
import rootUrl from "../../Hooks/RootUrl";
import loadingSvg from "../../Assets/Svg/loading-2.svg";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  const { isLoading, refetch } = useQuery("allOrdersForAdmin", () => {
    fetch(`${rootUrl}/ordersByUser`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      });
  });

  //console.log(orders);

  const handlePaid = async e => {
    const EveryThingOk = window.confirm("are you sure ?");
    if (EveryThingOk) {
      const payData = {
        isPaid: true,
      };
      await fetch(`${rootUrl}/ordersUpdate/${e}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payData),
      })
        .then(res => res.json())
        .then(data => {
          //console.log(data)
          refetch();
        });
    }
  };

  const handleShipped = e => {
    const Shipped = { Shipped: true };

    fetch(`${rootUrl}/updateShipped/${e}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
      body: JSON.stringify(Shipped),
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        refetch();
      });
  };

  return (
    <div>
      {isLoading && (
        <div className="w-full flex ">
          <img
            className="w-36 h-36 mx-auto inline-block"
            src={loadingSvg}
            alt="Loading..."
          />
        </div>
      )}

      <div className={`${isLoading && "hidden"} mb-36`}>
        <table className="table relative w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th className="text-center">Image</th>
              <th>Name</th>
              <th>Buyer</th>
              <th>Quantity</th>
              <th>
                Total <span className=" text-orange-500">$</span>
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map(
              (
                {
                  BuyerEmail,
                  Product,
                  Quantity,
                  pricePerUnit,
                  ProductId,
                  picture,
                  price,
                  isPaid,
                  _id,
                  Shipped,
                  transactionId,
                },
                i
              ) => (
                <tr
                  key={i}
                  className="border-[1px] border-t-0 border-gray-700 "
                >
                  <th>{i + 1}</th>
                  <td>
                    {" "}
                    <div className="avatar">
                      <div className="w-24 mask mask-squircle">
                        <img src={picture} alt="ok" />
                      </div>
                    </div>{" "}
                  </td>
                  <td className="text-xs">{Product}</td>
                  <td>{BuyerEmail}</td>
                  <td>{Quantity}</td>
                  <td>{price * Quantity}</td>
                  <td>
                    <div>
                      {isPaid ? (
                        <>
                          {" "}
                          {!Shipped && (
                            <button className="btn btn-disabled btn-xs text-orange-500 ">
                              Pending...{" "}
                            </button>
                          )}
                          <button
                            className={`btn btn-xs text-green-500 ${
                              Shipped && "btn-disabled"
                            } `}
                            onClick={() => handleShipped(_id)}
                          >
                            {!Shipped ? "Shipped  now " : "Shipped"}{" "}
                          </button>{" "}
                        </>
                      ) : (
                        <div className="flex flex-col gap-4">
                          <button className="btn btn-disabled btn-xs text-red-500 ">
                            Unpaid{" "}
                          </button>
                          <label
                            htmlFor="delete-order-modal"
                            className="btn modal-button btn-xs btn-warning"
                            onClick={() => handlePaid(_id)}
                          >
                            Make paid
                          </label>
                        </div>
                      )}
                      {transactionId && (
                        <p className="text-xs text-start">
                          {" "}
                          transactionId:- <br />{" "}
                          <span className="text-yellow-500 ">
                            {" "}
                            {transactionId}
                          </span>
                        </p>
                      )}
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
