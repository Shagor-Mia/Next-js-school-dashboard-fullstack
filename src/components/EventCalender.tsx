import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

//temporary
const events = [
  {
    id: 1,
    title: "Annual Sports Day",
    time: "9:00am - 1:00pm",
    description:
      "Inter-house competitions, races, and awards ceremony on the school ground.",
  },
  {
    id: 2,
    title: "Science Exhibition",
    time: "10:00am - 2:00pm",
    description:
      "Students display their science projects and experiments in the school hall.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    time: "8:30am - 11:30am",
    description: "Meeting to discuss student progress with teachers.",
  },
  {
    id: 4,
    title: "School Picnic",
    time: "7:00am - 5:00pm",
    description: "Fun trip to the city park with games, food, and activities.",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-2">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple "
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="text-sm mt-4">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
