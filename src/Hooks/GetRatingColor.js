export default function getColor(rating) {
  switch (+rating) {
    case 1:
      return "#f24333"; // Red
    case 2:
      return "#f9ce1d"; // Yellow
    case 3:
      return "#13b5b1"; // Blue-green
    case 4:
      return "#7e1df9"; // Purple
    case 5:
      return "#00c427"; // Green
    default:
      return "#000000"; // a default color here if needed
  }
}
