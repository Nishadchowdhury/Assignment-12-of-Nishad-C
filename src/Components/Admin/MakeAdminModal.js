import React from "react";
import { toast } from "react-toastify";
import rootUrl from "../../Hooks/RootUrl";

const MakeAdminModal = ({
  AdminModalData,
  setAdminModalData,
  refetch,
}) => {
  const { UserEmail, role, _id } = AdminModalData;

  const handleUpdate = () => {
    const userForDB = {
      role: "Admin",
    };

    const url = `${rootUrl}/Login/${UserEmail}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userForDB),
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        toast.success(
          `user update success ${UserEmail} is admin now !`
        );
        setAdminModalData(null);
        refetch();
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="for-admin-make-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setAdminModalData(null)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg mt-4 ">
            Do you want to promote{" "}
            <span className="font-bold text-white">{UserEmail}</span>{" "}
            to an admin?{" "}
          </h3>

          <p className="py-4 text-orange-400">user Id:_ {_id}</p>

          <div className="flex justify-end">
            <button
              className="btn btn-warning"
              onClick={handleUpdate}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdminModal;
