import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../../../components/layout/title';

const HomeStory = () => {
    return (
        <>
            <Title>our coffee story</Title>
            <div className="flex flex-col text-center md:text-left md:grid grid-cols-2 gap-8 mb-25">
                <div className="">
                    <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source
                            src="https://cdn.pixabay.com/video/2024/03/04/202910-919288798_tiny.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="my-3">
                    <h1 className="text-3xl font-semibold">What is your most special coffee?</h1>
                    <p className="my-4 text-base text-gray-500">
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
                        all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
                        One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                        far World of Grammar.
                    </p>
                    <NavLink to="/about" className="text-coffee underline-story font-medium">
                        Read the full Story
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default HomeStory;
