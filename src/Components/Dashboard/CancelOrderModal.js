import React, { useState } from "react";
import rootUrl from "../../Hooks/RootUrl";

const CancelOrderModal = ({
  dataForModal,
  refetch,
  setDataForModal,
}) => {
  const { picture, _id, Product } = dataForModal;

  const [Loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    fetch(`${rootUrl}/deleteMyOrder/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        setLoading(false);
        refetch();
        setDataForModal(null);
      });
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag-- > */}
      <input
        type="checkbox"
        id="delete-order-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative card card-side bg-base-100 shadow-xl">
          <label
            htmlFor="delete-order-modal"
            disabled={Loading}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <figure className="">
            <img
              src={picture}
              className="w-40 rounded-2xl h-full overflow-hidden"
              alt="Movie"
            />
          </figure>

          <div className="card-body pb-0 pr-0">
            <h2 className="card-title text-warning "> {Product} </h2>
            <p className="text-error">Are Your Sure ? </p>
            <div className="card-actions justify-end">
              <button
                disabled={Loading}
                className="btn btn-error mt-8"
                onClick={handleDelete}
              >
                Confirm cancel order !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;
