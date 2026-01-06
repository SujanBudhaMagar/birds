"use client";
import { SidebarData } from "@/constants";
import { useAuthStore } from "@/store/authstore";
import { AccountProps, Role } from "@/types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiLogout, CiUser } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

interface SidebarProps {
  role?: string;
}
const Sidebar = ({ role }: SidebarProps) => {
  const [selected, setSelected] = useState<string>("/dashboard/overview");
  const Account: AccountProps[] = [
    { title: "My Profile", link: "/dashboard/my-profile", icon: <CiUser /> },
    {
      title: "Notifications",
      link: "/dashboard/notifications",
      icon: <IoMdNotificationsOutline />,
    },
    {
      title: "Submit Report",
      link: "/dashboard/submit-report",
      icon: <TbSend />,
    },
  ];
  const AdminTools: AccountProps[] = [
    {
      title: "Manage Notifications",
      link: "/dashboard/manage-notifications",
      icon: <IoNotificationsOutline />,
    },
    {
      title: "Manage Reports",
      link: "/dashboard/manage-reports",
      icon: <RiErrorWarningLine />,
    },
  ];

  const filteredSidebarData = SidebarData.filter((items) =>
    items.allowedRoles.includes(role as Role)
  );
  const clearRole = useAuthStore((s) => s.clearRole);

  return (
    <aside className="w-64 border-r border-gray-200 shadow-md h-full">
      <div className="bg-white border-primary shadow-md px-6 py-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
            {/* <Image src="" alt="user-Profile" className="h-6 w-6" /> */}
            <div className="h-8 w-8 test" />
            <h1 className="sidebar-header">Admin Panel</h1>
          </div>
          <h2 className="sidebar-subheading">System Administrator</h2>
        </div>
      </div>
      <section className="flex flex-col justify-between h-[90vh] px-3 py-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-base font-semibold">Main Menu</h1>
          <hr className="h-px w-full" />
          {filteredSidebarData.map((side) => (
            <Link
              href={side.link}
              key={side.link}
              className={`${
                selected === side.link ? "bg-[#D9D9D959]" : ""
              } sidebar-link`}
              onClick={() => setSelected(side.link)}
            >
              <Image
                src={side.icon}
                alt="icons"
                height={100}
                width={100}
                className="h-4 w-4"
              />
              <span className="text-base">{side.title}</span>
            </Link>
          ))}
        </div>
        {role === "admin" && (
          <>
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-semibold">Admin Tools</h1>
              <hr className="h-px w-full" />
              <ul>
                {AdminTools.map((tools) => (
                  <Link
                    key={tools.link}
                    href={tools.link}
                    className={`${
                      selected === tools.link ? "bg-[#D9D9D959]" : ""
                    } sidebar-link`}
                    onClick={() => setSelected(tools.link)}
                  >
                    {tools.icon}
                    {tools.title}
                  </Link>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-base">Accounts</h1>
          <hr className="h-px bg-secondary" />
          <ul className="flex flex-col gap-3">
            {Account.map((account) => (
              <Link
                key={account.link}
                href={account.link}
                className={`sidebar-link ${
                  selected === account.link ? "bg-[#D9D9D959]" : ""
                }`}
                onClick={() => setSelected(account.link)}
              >
                {account.icon}
                {account.title}
              </Link>
            ))}
          </ul>
          <button
            onClick={() => {
              clearRole();
              signOut({ callbackUrl: "/login" });
            }}
            className="text-red-500 bg-red-100 p-2 text-base flex rounded-sm items-center justify-center gap-1"
          >
            <CiLogout />
            <span>Logout</span>
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
