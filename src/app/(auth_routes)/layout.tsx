import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/option";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session) {
    redirect("/dashboard/overview");
  }
  return <>{children}</>;
}
