"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";

const Header = () => {
  return (
    <header className="globalContainer flex justify-between items-center h-16 w-full shadow-md z-10">
      {/* <Image
        src=""
        alt="No Logo"
        height={100}
        width={100}
        className="h-10 w-10"
      /> */}
      <div className="h-10 w-10 test" />
      <button
        onClick={() => signOut()}
        className="text-primary p-2 text-xs flex bg-[#EFEFEF] rounded-sm items-center justify-center gap-1"
      >
        <CiLogout />
        <span>Logout</span>
      </button>
    </header>
  );
};

export default Header;
