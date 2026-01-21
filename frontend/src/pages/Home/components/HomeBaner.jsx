import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/layout/Button';

const HomeBaner = () => {
    return (
        <div className="mb-25 lg:px-7.5">
            <div className="flex max-w-360 min-h-132.5 min-w-220 mx-auto bg-[#050827]">
                <div className="flex flex-col items-center justify-center text-white bg-slider-home w-screen lg:w-235 lg:mx-auto">
                    <div className="flex flex-col items-center mx-auto w-[80%] text-center">
                        <div className="text-[12px] uppercase font-semibold tracking-[2px] opacity-[0.8]">
                            Best place to buy design
                        </div>

                        <div className="text-[48px] my-2.5 font-serif">Coffee Mugs </div>

                        <p className="text-[18px] text-center mb-7.5 opacity-[0.8]">
                            The most versatile furniture system ever created. Designed to fit your life, made to move
                            and grow.
                        </p>

                        <NavLink to="/products" className="">
                            <Button children="Explore Our Products" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBaner;
