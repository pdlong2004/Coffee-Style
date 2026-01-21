import React from "react";
import { locations } from "../data/location";

const ContactLocation = () => {
  return (
    <>
      {locations.map((location) => (
        <div key={location.uid} className="mb-12.5 text-center">
          {/* Image */}
          <div
            className="h-47.5 bg-cover bg-center mb-10"
            style={{ backgroundImage: `url(${location.image})` }}
          />

          {/* Country */}
          <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold">
            {location.country}
          </div>

          {/* City */}
          <h2 className="text-2xl mb-2.5">{location.area}</h2>

          {/* Address */}
          <ul className="text-gray-600 mb-3.75">
            {location.address.map((addr, index) => (
              <li key={index}>{addr}</li>
            ))}
          </ul>

          {/* Opening Times */}
          <div className="uppercase text-sm tracking-widest text-gray-500 mb-2.5 font-semibold mt-6.25">
            Opening Times
          </div>
          <ul className="text-gray-600">
            {location.openingTimes.map((time, index) => (
              <li key={index}>
                <span>{`${time.days} - `}</span>
                <span>{time.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ContactLocation;
