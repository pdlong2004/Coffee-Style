import React from "react";
import { history } from "../data/history";
import Title from "../../../components/layout/Title";

const AboutHistory = () => {
  const historyData = history;

  return (
    <>
      <Title>History Timeline</Title>

      <div>
        {historyData.map((item) => (
          <div
            key={item.id}
            className="mb-12.5 w-[60%] mx-auto text-center relative flex flex-col items-center"
          >
            <div className="absolute left-0 -top-7 right-0 text-[40px] text-[#1d1f2e0d]">
              {item.id}
            </div>
            <div className="text-sm uppercase static opacity-[0.6] tracking-[2px] font-medium">
              {item.date}
            </div>
            <div className="text-lg my-2.5 ">{item.title}</div>

            {item.description && (
              <p className="mb-3.75 text-gray-500">{item.description}</p>
            )}

            <div className="w-50 h-px mt-7.5 bg-[#ececed]"></div>
            <div className="w-px h-15 bg-[#ececed] "></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutHistory;
