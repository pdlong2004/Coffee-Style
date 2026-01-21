import api from "../lib/axios";

export const getAboutApi = () => {
  return api.get("/about");
};
