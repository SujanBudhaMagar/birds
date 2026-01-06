"use client";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import UserModal from "./UserModal";
import { UserProps } from "@/types";
import { MdDelete } from "react-icons/md";
import { FaBan, FaEdit } from "react-icons/fa";
import NoDataCard from "../common/NoData";

const Moderator = () => {
  const [addModerator, setAddModerator] = useState(false);
  const [loadModeratorData, setLoadModeratorData] = useState<UserProps[]>([]);
  const [editingModerator, setEditingModerator] = useState<UserProps | null>(
    null
  );

  const closeForm = () => {
    setAddModerator(false);
  };

  const handleDelete = (id: string) => {
    setLoadModeratorData((prev) => prev.filter((mod) => mod.userId !== id));
  };

  const handleAddOrEditModerator = (data: UserProps) => {
    if (editingModerator) {
      setLoadModeratorData((prev) =>
        prev.map((mod) =>
          mod.userId === editingModerator.userId
            ? { ...data, userId: editingModerator.userId }
            : mod
        )
      );
      setEditingModerator(null);
    } else {
      setLoadModeratorData((prev) => [
        ...prev,
        { ...data, userId: crypto.randomUUID() },
      ]);
    }
    closeForm();
  };

  useEffect(() => {
    if (addModerator) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [addModerator]);

  return (
    <section className="rounded-lg py-6 bg-white shadow-md border-px border-primary px-4">
      <div className="flex flex-col gap-8">
        <Header
          title="Moderator Management"
          des="Create, edit and manage moderators "
          button="Add Moderator"
          onClick={() => {
            setEditingModerator(null);
            setAddModerator(true);
          }}
        />
        {loadModeratorData.length > 0 ? (
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="table-row">
                <th className="cell w-[17.5%]">Username</th>
                <th className="cell w-[17.5%]">Full Name</th>
                <th className="cell w-[25%]">Email</th>
                <th className="cell w-[15%]">Status</th>
                <th className="cell w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {loadModeratorData.map((moderator) => (
                <tr key={moderator.userId} className="table-data">
                  <td className="cell">{moderator.userName}</td>
                  <td className="cell">{moderator.fullName}</td>
                  <td className="cell">{moderator.email}</td>
                  <td className="cell">
                    <span
                      className={`px-2 py-1 text-white text-sm rounded-sm ${
                        moderator.status == "active"
                          ? "bg-green-400"
                          : "bg-red-500"
                      }`}
                    >
                      {moderator.status}
                    </span>
                  </td>
                  <td className="cell">
                    <div className="flex gap-1 text-secondary text-base">
                      <FaEdit
                        className="text-blue-300"
                        onClick={() => {
                          setEditingModerator(moderator);
                          setAddModerator(true);
                        }}
                      />
                      <FaBan className="text-yellow-300" />
                      <MdDelete
                        className="text-red-500"
                        onClick={() => handleDelete(moderator.userId)}
                      />
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
      {addModerator && (
        <UserModal
          closeForm={closeForm}
          onSubmit={handleAddOrEditModerator}
          initialData={editingModerator}
          title={editingModerator ? "Edit Moderator" : "Create New Moderator"}
          des={
            editingModerator
              ? "Update moderator info"
              : "Add a new mod to the system"
          }
        />
      )}
    </section>
  );
};

export default Moderator;
