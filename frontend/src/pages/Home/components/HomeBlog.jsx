import ShowBlog from "../../../components/layout/ShowBlog.jsx";
import Title from "../../../components/layout/Title.jsx";
import useBlogs from "../../../hooks/useBlogs.js";

const HomeBlog = () => {
  const { blogs } = useBlogs();

  return (
    <>
      <Title>Behind the mugs, lifestyle stories</Title>
      <div className="lg:grid grid-cols-3 gap-4 mb-25">
        <ShowBlog blog={blogs?.slice(0, 3) || []} imageClass="h-[300px]" />
      </div>
    </>
  );
};

export default HomeBlog;
