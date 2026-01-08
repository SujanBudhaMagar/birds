"use client";
import HatcheryMember from "@/components/UserManagement/HatcheryMember";
import Moderator from "@/components/UserManagement/Moderator";
import { useAuthStore } from "@/store/authstore";
import { useState } from "react";

const UserManagement = () => {
  const role = useAuthStore((s) => s.role);
  const [selected, setSelected] = useState<"Moderator" | "Hatchery Member">(
    "Moderator"
  );

  return (
    <section className="globalContainer">
      {role === "admin" && (
        <>
          <div className="flex gap-2 pb-4">
            {["Moderator", "Hatchery Member"].map((user) => (
              <button
                key={user}
                className={`text-base duration-200 transition-all rounded-lg p-2 shadow-sm ${
                  selected === user ? "bg-gray-300" : "bg-white"
                }`}
                onClick={() => setSelected(user as any)}
              >
                {user}
              </button>
            ))}
          </div>
          {selected === "Moderator" && <Moderator />}
          {selected === "Hatchery Member" && <HatcheryMember />}
        </>
      )}
      {role === "moderator" && (
        <>
          <button className="bg-gray-200 shadow-sm rounded-lg p-2 text-base test mb-4">
            Hatchery Member
          </button>
          <HatcheryMember />
        </>
      )}
      {/* {role === "hatchery_member" && <HatcheryMember />} */}
    </section>
  );
};

export default UserManagement;
