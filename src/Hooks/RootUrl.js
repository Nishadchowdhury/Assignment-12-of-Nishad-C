const dev = process.env.NODE_ENV === "development";
const rootUrl = !dev
  ? "http://localhost:5000"
  : "https://laparts-server.onrender.com";
export default rootUrl;
