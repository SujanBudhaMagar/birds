"use client";

import { useAuthStore } from "@/store/authstore";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

function AuthInit() {
  const { data: session, status } = useSession();
  const setRole = useAuthStore((s) => s.setRole);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role) {
      setRole(session.user.role);
    }
  }, [status, session, setRole]);

  return null;
}

export default function AuthSession({ children }: Props) {
  return (
    <SessionProvider>
      <AuthInit /> {/* store role once */}
      {children}
    </SessionProvider>
  );
}
