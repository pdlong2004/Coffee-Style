import { useEffect, useState } from "react";
import { getAboutApi } from "../services/about.service";

export const useAbout = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      try {
        const res = await getAboutApi();
        setAbouts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAbout();
  }, []);

  return { abouts };
};
