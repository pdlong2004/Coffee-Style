import React from 'react';
import useCategoryBlog from './../../../hooks/useCategoryBlog';
import { NavLink } from 'react-router-dom';

const Category = () => {
    const { categoryblogs } = useCategoryBlog();

    return (
        <div className="mb-7.5">
            <div className="py-2.5 mb-12.5 text-2xl border-b border-gray-100">
                <h2 className="my-3.75">Categories</h2>
            </div>

            <ul>
                {categoryblogs.map((category) => (
                    <NavLink key={category._id} to={`/blog/category/${category.slug}`} end>
                        {({ isActive }) => (
                            <li
                                className={`
                                    flex justify-between items-center mb-4 py-2 pl-5
                                    border-l-2 cursor-pointer
                                    ${
                                        isActive
                                            ? 'border-coffee '
                                            : 'border-light-coffee hover:border-coffee hover:bg-[#a25f4b0a]'
                                    }
                                `}
                            >
                                {category.name}
                            </li>
                        )}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Category;
