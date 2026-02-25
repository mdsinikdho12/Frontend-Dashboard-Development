import axios from "axios";

const api = axios.create({
  baseURL: "https://task-api-eight-flax.vercel.app",
});

export default api;
