"use client";

import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import React from "react";

const ParentPage = () => {
  return (
    <div className="p-4 flex-1 flex gap-4 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white h-full p-4 rounded-md">
          <h1 className="text-xl font-semibold">schedule(Samin Hasan)</h1>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full flex flex-col xl:w-1/3 gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
