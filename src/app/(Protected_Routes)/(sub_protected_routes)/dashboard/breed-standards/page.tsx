"use client";
import BreedStandard from "@/components/BreedStandards/BreedStandard";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const BreedStandards = () => {
  const { data: session, status } = useSession();

  const role = session?.user?.role;

  useEffect(() => {
    if (role) {
      console.log("role:", role);
    }
  }, [role]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Unauthorized</p>;
  if (!role) return null;
  return (
    <section className="globalContainer">
      {(role === "admin" || role === "moderator") && (
        <>
          <BreedStandard />
        </>
      )}
    </section>
  );
};

export default BreedStandards;
