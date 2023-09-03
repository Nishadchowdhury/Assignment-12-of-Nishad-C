import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { userContextFirebase } from "../../App";
import { commonButton } from "../../Hooks/Classes";
import rootUrl from "../../Hooks/RootUrl";
import Loading from "../Shared/Loading/Loading";
import OrderModal from "./OrderModal";
import loadingSvg from "../../Assets/Svg/loading-2.svg";
import checkAdmin from "../../Hooks/CheckAdmin";
const PurchasePage = () => {
  // disabled={!this.state.value}
  const id = useLocation().pathname.split("/")[2];
  //user from the react context
  const [user, loadingUser, error] = useContext(userContextFirebase);
  const { displayName, email, phoneNumber, photoURL } = user;

  const [loadingOrder, setLoadingOrder] = useState(false);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [dbUser, setDbUser] = useState({});
  useEffect(() => {
    async function getData() {
      let userFromDatabase = await checkAdmin(user?.email);

      if (userFromDatabase) {
        setDbUser(userFromDatabase);
      }
    }
    getData();
  }, [user]);

  const {
    description,
    minimum,
    name,
    picture,
    price,
    quantity,
    _id,
  } = data;

  const {
    data: optionsa,
    isLoading,
    refetch,
  } = useQuery("placeOrderPage", () =>
    fetch(`${rootUrl}/ProductSingle/${id}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
  );

  const handleOrder = async e => {
    e.preventDefault();
    setLoadingOrder(true);

    const order = {
      ProductId: _id,
      BuyerEmail: email,
      price: price,
      isPaid: false,
      picture: picture,
      Name: e.target.Name.value,
      Address: e.target.Address.value,
      Phone: e.target.Phone.value,
      Product: e.target.Product.value,
      Quantity: e.target.Quantity.value,
    };

    const url = `${rootUrl}/addOrder`;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    };

    fetch(url, options).then(response => {
      //console.log(response.status);
      e.target.reset();
      setShowModal(false);
      setLoadingOrder(false);

      const url = `${rootUrl}/updateQuantity/${_id}`;
      const option = {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
        body: JSON.stringify({
          quantity: +quantity - +order.Quantity,
        }),
      };
      fetch(url, option)
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          refetch();
        });
    });
  };

  if (loadingUser) {
    return (
      <div className="min-h-[90vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="lg:min-h-[90vh]  flex flex-col justify-center mb-6 lg:mb-0  ">
      <div className="flex justify-center items-center mb-4 flex-col">
        <div className="text-end">
          <span>Hello</span>
          <div className="inline-block">
            {displayName ? (
              <span className="text-green-500">{displayName}</span>
            ) : (
              <div>
                <span className="text-red-500"> No Name</span>
                <Link className="btn btn-xs btn-primary" to="/login">
                  Add Name
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <span className="text-green-500">{email} </span>
        </div>
      </div>
      <div className="card lg:overflow-y-auto mx-auto w-11/12 border-[1px] lg:card-side bg-base-100 shadow-xl">
        <div className="">
          <figure className="relative">
            <img
              className="lg:w-[26rem] h-full "
              src={picture ? picture : loadingSvg}
              alt="Album"
            />
            {+quantity === 0 && (
              <span className="bg-red-500 text-white px-2 py-1 absolute w-auto h-auto top-0 left-0 ">
                Out Of Stock
              </span>
            )}
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title text-white opacity-90">
            Name: {name}
          </h2>
          <h2 className="card-title text-white opacity-90">
            in Stoke: {quantity}
          </h2>
          <h2 className="card-title text-white opacity-90">
            Minimum acceptable amount: {minimum}
          </h2>
          <h2 className="card-title text-white opacity-90">
            Par Unite Cost: {price} $
          </h2>
          <br />

          <h2 className="card-title text-2xl"> Product Details:- </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {!dbUser?.role === "Admin" ? (
              <label
                onClick={() => setShowModal(true)}
                htmlFor="orderModal"
                disabled={+quantity === 0 || isLoading}
                className={`btn modal-button ${commonButton}`}
              >
                Make an order
              </label>
            ) : (
              <span className="text-red-500 rounded-lg p-2 border border-red-500 ">
                you are an admin! Please login with a user account to
                continue.{" "}
                <Link
                  to={"/"}
                  children={"Go home"}
                  className="btn btn-xs"
                />
              </span>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <OrderModal
          data={data}
          user={user}
          setLoadingOrder={setLoadingOrder}
          loadingOrder={loadingOrder}
          handleOrder={handleOrder}
        />
      )}
    </div>
  );
};

export default PurchasePage;
