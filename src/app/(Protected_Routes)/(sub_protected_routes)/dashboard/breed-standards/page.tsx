"use client";
import BreedStandard from "@/components/BreedStandards/BreedStandard";
import { useAuthStore } from "@/store/authstore";

const BreedStandards = () => {
  const role = useAuthStore((s) => s.role);

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
