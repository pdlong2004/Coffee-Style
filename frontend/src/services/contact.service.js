import api from "../lib/axios";

export const postContact = (data) => {
  return api.post("/contact", data);
};
