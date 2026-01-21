import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="mb-7.5">
            <div className="py-2.5 mb-12.5 text-2xl border-b border-gray-100">
                <h2 className="my-3.75">About Us</h2>
            </div>

            <div>
                <img
                    src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
                    width="112"
                    alt=""
                    className="mb-3.75"
                ></img>
                <p className="text-gray-500 mb-3.75 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                </p>
                <NavLink to="/about" className="text-coffee underline-story font-medium">
                    Read the full Story
                </NavLink>
            </div>
        </div>
    );
};

export default AboutUs;
