"use client";
import { useUserRole } from "@/context/userContext";
import React from "react";

const FlockDetails = () => {
  const { role, status } = useUserRole();
  return <div></div>;
};

export default FlockDetails;
