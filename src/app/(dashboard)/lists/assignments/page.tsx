import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assignmentsData, role } from "../../../../lib/data";
import FormModel from "@/components/FormModel";
import { Assignment, Class, Prisma, Subject, Teacher } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ITEMS_PER_PAGE } from "@/lib/settings";

type AssigmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teachers",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: " Due Date",
    accessor: "dueDate",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: AssigmentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
  >
    <td className="flex items-center gap-4 p-4">{item.lesson.subject.name}</td>
    <td>{item.lesson.class.name}</td>
    <td className="hidden md:table-cell">{item.lesson.teacher.name}</td>
    <td className="hidden md:table-cell">
      {new Intl.DateTimeFormat("en-US").format(item.dueDate)}
    </td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <Link
            href={`/lists/assignments/${item.id}`}
            className="flex items-center gap-2"
          >
            <FormModel table="assignment" type="update" data={item} />
            <FormModel table="assignment" type="delete" id={item.id} />
          </Link>
        )}
      </div>
    </td>
  </tr>
);
const AssignmentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  //URL params condition
  const query: Prisma.AssignmentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lesson = { classId: parseInt(value) };
            break;
          case "teacherId":
            query.lesson = { teacherId: value };
            break;
          case "search":
            query.lesson = {
              subject: {
                name: { contains: value, mode: "insensitive" },
              },
            };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.assignment.findMany({
      where: query,
      include: {
        lesson: {
          select: {
            subject: { select: { name: true } },
            teacher: { select: { name: true, surname: true } },
            class: { select: { name: true } },
          },
        },
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1),
    }),
    prisma.assignment.count({ where: query }),
  ]);
  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/filter.png"} alt="" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/sort.png"} alt="" height={14} width={14} />
            </button>
            {role === "admin" && <FormModel table="assignment" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default AssignmentListPage;
