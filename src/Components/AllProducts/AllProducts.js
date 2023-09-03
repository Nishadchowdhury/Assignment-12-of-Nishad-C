import React from "react";
import { useQuery } from "react-query";
import rootUrl from "../../Hooks/RootUrl";
import Loading from "../Shared/Loading/Loading";
import SingleCardAllP from "./SingleCardAllP";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("allProducts", () =>
    fetch(`${rootUrl}/allProducts`).then(res => res.json())
  );

  // //console.log(products);

  if (isLoading) {
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap justify-center gap-4 w-11/12 mx-auto ">
        {products.map((product, i) => (
          <SingleCardAllP product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
