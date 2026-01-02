import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/option";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          {/* Scrollable content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
