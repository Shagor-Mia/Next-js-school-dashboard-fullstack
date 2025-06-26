import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] mid:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href={"/"}
          className="flex item-center justify-center lg:justify-start gap-2 p-3"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] mid:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-100 overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
