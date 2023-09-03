import React, { useState } from "react";
import { useQuery } from "react-query";
import { commonButton } from "../../Hooks/Classes";
import rootUrl from "../../Hooks/RootUrl";
import MakeAdminModal from "./MakeAdminModal";

const MakeAnAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [AdminModalData, setAdminModalData] = useState(null);

  const { data, isLoading, error, refetch } = useQuery(
    "allUsersForManage",
    () => {
      fetch(`${rootUrl}/userAll`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setAllUsers(data);
        });
    }
  );

  console.log(allUsers);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center">
        {allUsers?.map(({ UserEmail, role, _id }, i) => (
          <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{UserEmail}</h2>
              <p>
                {role !== "Admin"
                  ? "An user, Who can visit and buy only."
                  : "An admin, is able to do some hidden operation besides manage sensitive states."}
              </p>
              <div className="card-actions justify-end">
                {role ? (
                  <span className="btn btn-primary btn-disabled  text-green-500 ">
                    Admin
                  </span>
                ) : (
                  <label
                    htmlFor="for-admin-make-modal"
                    onClick={() =>
                      setAdminModalData({ UserEmail, role, _id })
                    }
                    className={commonButton}
                  >
                    Take an action
                  </label>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {AdminModalData && (
        <MakeAdminModal
          AdminModalData={AdminModalData}
          setAdminModalData={setAdminModalData}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default MakeAnAdmin;
