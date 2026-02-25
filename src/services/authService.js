import api from "./api";

export const loginUser = async (data) => {
  const res = await api.post("/api/login", data);
  return res.data;
};
