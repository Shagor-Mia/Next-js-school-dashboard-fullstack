"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableSearch = () => {
  const router = useRouter();

  const handdleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search); //return all the existing params.
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <form
      onSubmit={handdleSubmit}
      className="w-full md:w-auto flex items-center text-xs gap-2 rounded-full border border-gray-300 px-2 py-1"
    >
      <Image src={"/search.png"} alt="" width={12} height={12} />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent w-40 text-xs"
      />
    </form>
  );
};

export default TableSearch;
