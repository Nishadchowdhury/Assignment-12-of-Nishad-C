import LoadingSpinner from "../../../Assets/Svg/loadingSVG.svg";
const Loading = () => (
  <div className="w-full h-full flex justify-center items-center ">
    <img src={LoadingSpinner} alt="" />
  </div>
);
export default Loading;

export function loadingSVG() {
  return Loading;
}
