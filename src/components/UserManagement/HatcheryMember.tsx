"use client";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import UserModal from "./UserModal";
import { UserPropsType } from "@/types";
import { MdDelete } from "react-icons/md";
import { FaBan, FaEdit } from "react-icons/fa";
import NoDataCard from "../common/NoData";
import { dummyUsers } from "@/constants";
import Pagination from "../common/Pagination";

const HatcheryMember = () => {
  const [addHatcheryMember, setAddHatcheryMember] = useState(false);
  const [loadHatcheryMemberData, setLoadHatcheryMemberData] = useState<
    UserPropsType[]
  >([]);

  const [editingHatcheryMember, setEditingHatcheryMember] =
    useState<UserPropsType | null>(null);

  const closeForm = () => {
    setAddHatcheryMember(false);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const items_per_page = 5;
  const totalItems = loadHatcheryMemberData.length;
  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const paginatedHatcheryMembers = loadHatcheryMemberData.slice(
    startIndex,
    endIndex
  );

  const handleAddOrEditModerator = (data: UserPropsType) => {
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
  };

  return (
    <section className="rounded-lg py-6 bg-white shadow-sm border border-border px-4 flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <Header
          title="Hatchery Member Management"
          des="Create, edit and manage hatchery members"
          button="Add Hatchery Member"
          onClick={() => setAddHatcheryMember(true)}
        />
        {paginatedHatcheryMembers.length > 0 ? (
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
              {paginatedHatcheryMembers.map((hatchery) => (
                <tr key={hatchery.userId} className="table-data">
                  <td className="cell">{hatchery.userName}</td>
                  <td className="cell">{hatchery.fullName}</td>
                  <td className="cell">{hatchery.email}</td>
                  <td className="cell">
                    <span
                      className={`px-2 py-1 text-white text-sm rounded-sm ${
                        hatchery.status === "active"
                          ? "bg-green-400 text-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {hatchery.status}
                    </span>
                  </td>
                  <td className="cell">
                    <div className="flex items-center gap-1 text-secondary text-base">
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
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={items_per_page}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default HatcheryMember;
