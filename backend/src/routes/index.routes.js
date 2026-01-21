import productRouter from "./product.route.js";
import categoryRouter from "./category.routes.js";
import blogcategoryRouter from "./blogcategory.routes.js";
import blogRouter from "./blog.routes.js";
import authorRouter from "./author.routes.js";
import cartRouter from "./cart.routes.js";
import authRouter from "./auth.routes.js";
import aboutRouter from "./about.routes.js";
import contactRouter from "./contact.routes.js";

function routes(app) {
  app.use("/api/product", productRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/blogcategory", blogcategoryRouter);
  app.use("/api/blog", blogRouter);
  app.use("/api/author", authorRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/about", aboutRouter);
  app.use("/api/contact", contactRouter);
}

export default routes;
