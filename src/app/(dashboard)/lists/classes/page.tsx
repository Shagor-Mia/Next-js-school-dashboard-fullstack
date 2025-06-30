import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { classesData, role, subjectsData } from "../../../../lib/data";
import FormModel from "@/components/FormModel";
import {
  Announcement,
  Class,
  Event,
  Lesson,
  Prisma,
  Student,
  Teacher,
} from "@prisma/client";
import prisma from "@/lib/prisma";
import { ITEMS_PER_PAGE } from "@/lib/settings";

type ClassList = Class & {
  supervisor: Teacher;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden lg:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden lg:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];

const renderRow = (item: ClassList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight"
  >
    <td className="flex items-center gap-4 p-4">{item.name}</td>
    <td className="hidden md:table-cell">{item.capacity}</td>
    <td className="hidden md:table-cell">{item.name[0]}</td>
    <td className="hidden md:table-cell">{item.supervisor.name}</td>

    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <Link
            href={`/lists/classes/${item.id}`}
            className="flex items-center gap-2"
          >
            <FormModel table="class" type="update" data={item} />
            <FormModel table="class" type="delete" id={item.id} />
          </Link>
        )}
      </div>
    </td>
  </tr>
);
const ClassesListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  //URL params condition
  const query: Prisma.ClassWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "supervisorId":
            query.supervisorId = value;
            break;
          case "search":
            query.name = {
              contains: value,
              mode: "insensitive",
            };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.class.findMany({
      where: query,
      include: {
        supervisor: true,
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1),
    }),
    prisma.class.count({ where: query }),
  ]);

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/filter.png"} alt="" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src={"/sort.png"} alt="" height={14} width={14} />
            </button>
            {role === "admin" && <FormModel table="class" type="create" />}
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

export default ClassesListPage;
