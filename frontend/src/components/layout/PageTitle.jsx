import React from "react";
import Title from "./Title";

const PageTitle = ({ h1 = "", p = "", title = "" }) => {
  return (
    <div className="lg:px-7.5 relative">
      <div className="relative lg:max-w-360 lg:min-w-235 lg:px-0 mx-auto pt-25 pb-27.5 bg-[#f6f6f6] ">
        <div className="lg:w-235 mx-auto relative">
          <div className="w-[60%] mb-25 text-center mx-auto">
            <h1 className="mt-2.5 mb-3.75 text-4xl text-center">{h1}</h1>
            <p className="text-lg text-gray-500">{p}</p>
          </div>
          <div>
            <Title children={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
