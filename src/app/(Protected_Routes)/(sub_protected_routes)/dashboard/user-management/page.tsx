"use client";

import HatcheryMember from "@/components/UserManagement/HatcheryMember";
import Moderator from "@/components/UserManagement/Moderator";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const { data: session, status } = useSession();
  const [selected, setSelected] = useState<"Moderator" | "Hatchery Member">(
    "Moderator"
  );

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
      {role === "admin" && (
        <>
          <div className="flex gap-2 pb-6">
            {["Moderator", "Hatchery Member"].map((user) => (
              <button
                key={user}
                className={`text-xs duration-200 transition-all rounded-lg p-2 shadow-sm ${
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
          <button className="bg-gray-200 shadow-sm rounded-lg p-2 text-sm">
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
