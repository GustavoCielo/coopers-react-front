import axios from "axios";

// const api = axios.create({
//   baseURL: "https://api-nodejs-todolist.herokuapp.com",
// });

const api = axios.create({
  baseURL: "localhost:5000/",
});

export default api;
