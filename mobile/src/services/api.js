import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-hero-server.herokuapp.com",
});

export default api;
