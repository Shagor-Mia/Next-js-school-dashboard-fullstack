"use client";

import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/lists/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/lists/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/lists/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/lists/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/lists/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lists/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/lists/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/lists/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/lists/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/lists/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/lists/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/lists/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/lists/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const role = "admin"; // Change this to test different roles

const HomeMenuCard = () => {
  const filteredItems = menuItems[0].items.filter((item) =>
    item.visible.includes(role)
  );

  return (
    <div className="p-4">
      <div className="mb-1">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>(for see final
        prototype of each component just click student and teacher menu)
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {filteredItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="group bg-white shadow-md p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
          >
            <div className="w-12 h-12 relative mb-2">
              <Image
                src={item.icon}
                alt={item.label}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeMenuCard;
