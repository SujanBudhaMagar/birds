"use client";

import { useAuthStore } from "@/store/authstore";
import { useEffect } from "react";

interface SetRoleClientProps {
  role?: string;
}

export default function SetRoleClient({ role }: SetRoleClientProps) {
  const setRole = useAuthStore((s) => s.setRole);

  useEffect(() => {
    if (role) {
      setRole(role);
    }
  }, [role, setRole]);

  return null;
}
