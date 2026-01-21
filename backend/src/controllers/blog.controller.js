import BlogModel from "../../models/BLog.model.js";

export const getBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Lỗi khi gọi getBlog:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống",
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await BlogModel.create({
      ...req.body,
      publishedAt: req.body.status === "published" ? new Date() : null,
    });

    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Lỗi khi gọi createBlog:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Slug đã tồn tại",
      });
    }

    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống",
    });
  }
};

export const getBlogDetails = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await BlogModel.findOne({ slug })
      .populate("category", "name slug")
      .populate("author", "name avatar bio");

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy bài viết",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Lỗi khi gọi getBlogDetails:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống",
    });
  }
};

export const getBlogsByCategory = async (req, res) => {
  try {
    const { slug } = req.params;

    const blogs = await BlogModel.find({ status: "published" })
      .populate({
        path: "category",
        match: { slug },
        select: "name slug description",
      })
      .populate("author", "name avatar")
      .sort({ publishedAt: -1 });

    const filteredBlogs = blogs.filter((blog) => blog.category);

    res.status(200).json({
      success: true,
      data: filteredBlogs,
    });
  } catch (error) {
    console.error("getBlogsByCategory error:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống",
    });
  }
};

export const getBlogsByAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const blogs = await BlogModel.find({
      status: "published",
      author: id,
    })
      .populate("author", "name type bio")
      .populate("category", "name slug")
      .sort({ publishedAt: -1 });

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("getBlogsByAuthor error:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống",
    });
  }
};
