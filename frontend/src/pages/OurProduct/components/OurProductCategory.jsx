import React from 'react';
import useCategory from '../../../hooks/useCategory';
import { NavLink } from 'react-router-dom';

const OurProductCategory = () => {
    const { category } = useCategory();

    return (
        <div className="py-6.25 mb-25">
            <div className="flex md:flex-row flex-col justify-center uppercase text-[12px] font-medium tracking-[2px]">
                <NavLink
                    to="/products"
                    end
                    className={({ isActive }) =>
                        `py-2.5 px-4 border mx-1.25 mb-2.5 text-center
                        ${isActive ? 'border-coffee text-coffee' : 'border-[#ececed] text-[#a25f4b99]'}`
                    }
                >
                    All Product
                </NavLink>

                {category.map((cat) => (
                    <NavLink
                        key={cat._id}
                        to={`/products/category/${cat._id}`}
                        className={({ isActive }) =>
                            `py-2.5 px-4 border mx-1.25 mb-2.5 text-center
                            ${isActive ? 'border-coffee text-coffee' : 'border-[#ececed] text-[#a25f4b99]'}`
                        }
                    >
                        {cat.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default OurProductCategory;
