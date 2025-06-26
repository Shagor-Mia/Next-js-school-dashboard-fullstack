import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center text-xs gap-2 rounded-full border border-gray-300 px-2 py-1">
      <Image src={"/search.png"} alt="" width={12} height={12} />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent w-40 text-xs"
      />
    </div>
  );
};

export default TableSearch;
