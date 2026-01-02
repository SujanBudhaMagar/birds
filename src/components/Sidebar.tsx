import { AdminSidebar } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-200 shadow-md h-full">
      <div className="bg-white border-primary shadow-md px-6 py-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-1">
            {/* <Image src="" alt="user-Profile" className="h-6 w-6" /> */}
            <div className="h-6 w-6 test" />
            <h1 className="sidebar-header">Admin Panel</h1>
          </div>
          <h2 className="sidebar-subheading">System Administrator</h2>
        </div>
      </div>
      <ul className="flex flex-col gap-4 px-6 py-4">
        {AdminSidebar.map((side, i) => (
          <Link href={side.link} key={i} className="flex items-center gap-2">
            <Image
              src={side.icon}
              alt="icons"
              height={100}
              width={100}
              className="h-3 w-3"
            />
            <span className="text-sm">{side.title}</span>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
