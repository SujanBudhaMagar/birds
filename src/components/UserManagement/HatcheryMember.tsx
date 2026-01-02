"use client";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import UserModal from "./UserModal";
import { UserProps } from "@/types";
import { MdDelete } from "react-icons/md";
import { FaBan, FaEdit } from "react-icons/fa";
import NoDataCard from "../common/NoData";

const HatcheryMember = () => {
  const [addHatcheryMember, setAddHatcheryMember] = useState(false);
  const [loadHatcheryMemberData, setLoadHatcheryMemberData] = useState<
    UserProps[]
  >([]);

  const [editingHatcheryMember, setEditingHatcheryMember] =
    useState<UserProps | null>(null);

  const closeForm = () => {
    setAddHatcheryMember(false);
  };

  const handleAddOrEditModerator = (data: UserProps) => {
    if (editingHatcheryMember) {
      setLoadHatcheryMemberData((prev) =>
        prev.map((mod) =>
          mod.userId === editingHatcheryMember.userId
            ? { ...mod, ...data }
            : mod
        )
      );
      setEditingHatcheryMember(null);
    } else {
      setLoadHatcheryMemberData((prev) => [...prev, data]);
    }
    closeForm();
  };

  useEffect(() => {
    if (addHatcheryMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [addHatcheryMember]);

  const handleDelete = (id: string) => {
    setLoadHatcheryMemberData((prev) =>
      prev.filter((mod) => mod.userId !== id)
    );
    console.log("Id deleted", id);
  };

  return (
    <section className="rounded-lg py-6 bg-white shadow-md border-px border-primary px-4">
      <div className="flex flex-col gap-8">
        <Header
          title="Hatchery Member Management"
          des="Create, edit and manage hatchery members "
          button="Add Hatchery Member"
          onClick={() => setAddHatcheryMember(true)}
        />
        {loadHatcheryMemberData.length > 0 ? (
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-xs border-b border-b-secondary">
                <th className="cell w-[17.5%]">Username</th>
                <th className="cell w-[17.5%]">Full Name</th>
                <th className="cell w-[25%]">Email</th>
                <th className="cell w-[15%]">Status</th>
                <th className="cell w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {loadHatcheryMemberData.map((hatchery) => (
                <tr key={hatchery.userName} className="text-xs">
                  <td className="cell">{hatchery.userName}</td>
                  <td className="cell">{hatchery.fullName}</td>
                  <td className="cell">{hatchery.email}</td>
                  <td className="cell">
                    <span
                      className={`px-2 py-1 text-white text-[8px] rounded-sm ${
                        hatchery.status === "active"
                          ? "bg-green-400 text-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {hatchery.status}
                    </span>
                  </td>
                  <td className="cell">
                    <div className="flex items-center gap-1 text-secondary text-xs">
                      <FaEdit
                        className="text-blue-500"
                        onClick={() => {
                          setEditingHatcheryMember(hatchery);
                          setAddHatcheryMember(true);
                        }}
                      />
                      <FaBan />
                      <MdDelete onClick={() => handleDelete(hatchery.userId)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoDataCard />
        )}
      </div>
      {addHatcheryMember && (
        <UserModal
          closeForm={closeForm}
          onSubmit={handleAddOrEditModerator}
          initialData={editingHatcheryMember}
          title={
            editingHatcheryMember
              ? "Edit Hatchery Member"
              : "Create New Hatchery Member"
          }
          des={
            editingHatcheryMember
              ? "Update Hatchery Member Info"
              : "Add a new hatchery member to the system"
          }
        />
      )}
    </section>
  );
};

export default HatcheryMember;
