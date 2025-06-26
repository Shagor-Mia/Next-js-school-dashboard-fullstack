"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import HomeMenuCard from "./HomeMenu";
import Marquee from "react-fast-marquee";

const image = [
  {
    id: "1",
    url: "https://images.pexels.com/photos/31862712/pexels-photo-31862712/free-photo-of-group-portrait-of-young-adults-at-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    url: "https://images.pexels.com/photos/31862777/pexels-photo-31862777/free-photo-of-graduation-day-at-tam-nong-high-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Image slider effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 2000); // 1.5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [isPaused]);

  return (
    <>
      {/* header */}
      <div className="w-full bg-slate-800  flex flex-col px-4 md:px-8 ">
        <Navbar />
      </div>
      <div className="mt-5 mb-5 flex  justify-center items-center relative">
        <h1 className="font-serif mt-5 mb-5 flex items-center text-5xl text-black hover:text-gray-500">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md transition-opacity"
          />
          MA Ahmed School
        </h1>
      </div>
      <div className="p-2 bg-blue-100 mt-4 mb-4 rounded-sm">
        <Marquee>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          maxime non itaque cumque beatae totam corrupti reprehenderit officia
          eligendi quia.
        </Marquee>
      </div>

      <div className="p-2 flex-1 flex gap-2 flex-col lg:flex-row">
        {/* LEFT */}
        <div
          className={`w-full xl:w-2/3 relative aspect-video rounded-md overflow-hidden transition-shadow duration-300 ${
            isPaused ? "shadow-2xl" : ""
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Image
            key={image[currentIndex].id}
            src={image[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="rounded-md transition-opacity duration-2000"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* RIGHT */}
        <div className="w-full flex flex-col xl:w-1/3 gap-1">
          <div className="bg-gray-100 h-full p-4 relative aspect-video">
            <Image
              src={
                "https://images.pexels.com/photos/7973200/pexels-photo-7973200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Group portrait of young adults at school"
              fill
              className="rounded-md"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-gray-100 h-full p-4 relative aspect-video">
            <Image
              src={
                "https://images.pexels.com/photos/8500421/pexels-photo-8500421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Group portrait of young adults at school"
              fill
              className="rounded-md"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="p-2 bg-slate-100 m-2 rounded-md">
        <HomeMenuCard />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
