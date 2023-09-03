import { useQuery } from "react-query";
import { toast } from "react-toastify";
import rootUrl from "../../Hooks/RootUrl";

const ManageProducts = () => {
  const {
    data: products,
    // isLoading,
    // error,
    refetch,
  } = useQuery("allProductsForManage", () =>
    fetch(`${rootUrl}/allProducts`).then(res => res.json())
  );

  const habdleManageProDuct = async e => {
    //console.log(e);
    const EveryThingOk = window.confirm("are you sure to delete ?");

    if (EveryThingOk) {
      try {
        await fetch(`${rootUrl}/allProducts/${e}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            toast.success("product deleted");
          });
      } catch (error) {
        console.log(error);
        refetch();
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center my-3 ">
      {products?.map(
        (
          {
            description,
            minimum,
            name,
            picture,
            price,
            quantity,
            _id,
          },
          i
        ) => (
          <div
            key={i}
            className="card w-96 bg-base-100 shadow-xl border-[1px] border-slate-500 "
          >
            <figure>
              <img src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-error"
                  onClick={() => habdleManageProDuct(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ManageProducts;
