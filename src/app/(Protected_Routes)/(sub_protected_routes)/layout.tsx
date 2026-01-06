import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/option";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SetRoleClient from "@/components/SetRoleClient";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const role = session.user.role;
  console.log("this is current role", role);

  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar role={role} />
        <SetRoleClient role={role} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          {/* Scrollable content */}
          <main className="flex-1 overflow-auto py-6">{children}</main>
        </div>
      </div>
    </>
  );
}
