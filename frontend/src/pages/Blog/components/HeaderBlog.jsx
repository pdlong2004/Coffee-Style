import { NavLink, useLocation } from "react-router-dom";

const HeaderBlog = ({
  blog,
  title,
  excerpt,
  wClass,
  subTitle,
  address,
  isActive = false,
}) => {
  const { pathname } = useLocation();

  const isBlogActive =
    pathname.startsWith("/blog") || pathname.startsWith("/blogs");

  const categoryPath = `/blog/category/${blog?.category?.slug}`;
  const authorPath = `/blog/author/${blog?.author?._id}`;

  const isCategoryActive = pathname === categoryPath || pathname === authorPath;

  const linkClass = (active) =>
    `hover:text-coffee hover:underline underline-offset-4
     ${active ? "text-coffee underline" : "text-[#a25f4b4d]"}`;

  const handleAddressClick = (e) => {
    if (!isActive) {
      e.preventDefault();
    }
  };

  return (
    <div className="lg:w-235 m-auto">
      <div
        className={`mt-20 w-auto lg:w-[60%] text-center lg:text-left ${wClass}`}
      >
        <div className="flex justify-center lg:justify-start uppercase text-sm gap-2 font-medium mb-10">
          <NavLink to="/blogs" className={linkClass(isBlogActive)}>
            Blog
          </NavLink>

          <p className="text-[#a25f4b4d]">/</p>

          <NavLink
            to={categoryPath}
            className={linkClass(isCategoryActive)}
            onClick={handleAddressClick}
          >
            {address}
          </NavLink>
        </div>

        <h1 className="text-[44px] mt-2.5 mb-5">{title}</h1>

        {subTitle && (
          <p className="uppercase text-sm tracking-widest text-gray-500 font-semibold mb-3.75">
            {subTitle}
          </p>
        )}

        {excerpt && <p className="text-lg text-gray-500 mb-3.75">{excerpt}</p>}
      </div>
    </div>
  );
};

export default HeaderBlog;
