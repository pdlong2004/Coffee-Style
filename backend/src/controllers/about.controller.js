import About from "../../models/About.model.js";

export const getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (error) {
    console.error("Lỗi khi gọi getAbout", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(201).json(about);
  } catch (error) {
    console.error("Lỗi khi gọi createAbout", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
