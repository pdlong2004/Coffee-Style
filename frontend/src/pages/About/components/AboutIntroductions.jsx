import React from "react";
import Title from "../../../components/layout/title";
import ShowAbout from "./ShowAbout.jsx";

const AboutIntroductions = () => {
  return (
    <>
      <div className="w-[70%] mb-25 mx-auto">
        <Title className="mb-5!">Introductions</Title>
        <div className="text-center">
          <h3 className="text-3xl mt-5 mb-3.75">
            Overlaid the jeepers uselessly much excluding everyday life.
          </h3>

          <p className="text-lg text-gray-500 mb-3.75">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
      </div>
      <div className="">
        <ShowAbout />
      </div>
    </>
  );
};

export default AboutIntroductions;
