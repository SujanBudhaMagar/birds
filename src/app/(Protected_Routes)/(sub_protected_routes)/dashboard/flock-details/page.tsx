"use client";
import { useAuthStore } from "@/store/authstore";

const FlockDetails = () => {
  const role = useAuthStore((s) => s.role);
  return <div></div>;
};

export default FlockDetails;
