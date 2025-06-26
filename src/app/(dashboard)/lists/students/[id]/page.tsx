"use client";

import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import FormModel from "@/components/FormModel";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="flex flex-1 flex-col p-4 gap-4 xl:flex-row">
      {/*Left  */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row  gap-4">
          {/* User Card */}
          <div className="bg-Sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                height={144}
                width={144}
                className="h-36 w-36 rounded-full  object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 ">
              <div className="flex items-center gap-4">
                <h1>hamid reza</h1>
                <FormModel
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/blood.png"} alt="" height={14} width={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/date.png"} alt="" height={14} width={14} />
                  <span>january 2025</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/mail.png"} alt="" height={14} width={14} />
                  <span>test@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/phone.png"} alt="" height={14} width={14} />
                  <span>012345678</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Card */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            {/* Card */}
            <div className="bg-white p-4 gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleBranch.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleLesson.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleClass.png"}
                alt=""
                height={24}
                width={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalender />
        </div>
      </div>
      {/*Right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 gap-4 flex flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md hover:bg-blue-300 bg-SkyLight"
              href={""}
            >
              Teacher&apos;s
            </Link>
            <Link
              className="p-3 rounded-md hover:bg-blue-300 bg-SkyLight"
              href={""}
            >
              Students&apos;s
            </Link>
            <Link
              className="p-3 rounded-md hover:bg-blue-300 bg-SkyLight"
              href={""}
            >
              Lessons&apos;s
            </Link>
            <Link
              className="p-3 rounded-md hover:bg-blue-300 bg-SkyLight"
              href={""}
            >
              Exams&apos;s
            </Link>
            <Link
              className="p-3 rounded-md hover:bg-blue-300 bg-SkyLight"
              href={""}
            >
              Assignments&apos;s
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
