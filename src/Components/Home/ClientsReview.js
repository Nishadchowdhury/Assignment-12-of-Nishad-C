import React from "react";
import { useQuery } from "react-query";
import { headerClass } from "../../Hooks/Classes";
import rootUrl from "../../Hooks/RootUrl";
import getColor from "../../Hooks/GetRatingColor";

const ClientsReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviewDataHome", () =>
    fetch(`${rootUrl}/getReviewLimit/3`).then(res => res.json())
  );

  //console.log(reviews);

  return (
    <div>
      <h1 className={`${headerClass} mb-5 mt-5`}> Clients review </h1>
      <div className="w-4/5 mx-auto grid lg:grid-cols-3 grid-flow-row gap-4 ">
        {reviews?.map(
          ({ rating, text, userEmail, userImg, userName }, i) => (
            <div key={i} className="stack ">
              <div
                className={`card glass border-[1px] border-white h-44 card-side bg-base-100 shadow-xl`}
              >
                <figure className="">
                  <img
                    className="w-24 h-24 rounded-full  ring ring-slate-400 ring-offset-base-100 ring-offset-2 m-3 "
                    src={userImg}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body p-2 ">
                  <div className="card-title ">
                    Rating
                    <div className="badge badge-secondary text-sm mt-1 ">
                      {rating}
                    </div>
                    <svg
                      className=" -mt-[1px] w-7 inline"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m528.5 171.5-146.4-21.29-65.43-132.4C310.9 5.971 299.4-.002 287.1 0c-10.5 0-22 5.899-27.8 17.8l-65.5 132.4-146.33 21.3c-26.27 3.8-36.79 36.1-17.75 54.6l105.9 102.1-25.02 146.4c-3.6 20.7 13 37.4 31.6 37.4 4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713 18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5 105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1-117.2-61.48a16.007 16.007 0 0 0-14.87 0L163.4 450.7l22.4-130.1c.9-5.2-1.7-10.5-4.6-14.2l-94.7-92.09 130.9-19.04c5.2-.77 9.7-4.07 12-8.77L288 67.99l58.59 118.5a16 16 0 0 0 12.04 8.744l130.9 19.04-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z"
                        fill={getColor(rating)}
                        className="fill-000000"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-sm">{text} </p>
                  <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        {userEmail}
                      </div>
                      <div className="badge badge-outline text-black bg-green-500 ">
                        {userName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ClientsReview;
