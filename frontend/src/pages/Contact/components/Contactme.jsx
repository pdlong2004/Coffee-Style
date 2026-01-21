import React from "react";
import Title from "../../../components/layout/title";

const Contactme = () => {
  return (
    <>
      <Title children="Contact me" />
      <div className="grid grid-cols-3 text-center">
        <div className="uppercase text-sm tracking-widest text-gray-500 font-semibold">
          FullStack
        </div>
        <div className="uppercase text-sm tracking-widest font-semibold">
          Phung Duc Long
        </div>
        <div className="text-gray-500">
          <p>0329-488-038</p>
          <p>phungduclong268@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contactme;
