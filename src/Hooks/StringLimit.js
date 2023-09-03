export default function cutText(text) {
  const length = text.length;

  switch (length) {
    case length > 10:
      return "";
    default:
      return "#000000"; // a default color here if needed
  }
}
