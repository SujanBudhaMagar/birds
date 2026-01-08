"use client";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import { FlockPropsType, HatcheryPropsType } from "@/types";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import NoDataCard from "../common/NoData";
import Pagination from "../common/Pagination";
import HatcheryModal from "./HatcheryModal";
import FlockModal from "./FlockModal";

const AllHatcheries = () => {
  const [addHatcheries, setAddHatcheries] = useState(false);
  const [addFlocks, setAddFlocks] = useState(false);
  const [loadHatcheries, setLoadHatcheries] = useState<HatcheryPropsType[]>([]);
  const [loadFlocks, setLoadFlocks] = useState<FlockPropsType[]>([]);
  const [editingHatcheries, setEditingHatcheries] =
    useState<HatcheryPropsType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const items_per_page = 5;

  const totalItems = loadHatcheries.length;
  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const paginatedHatcheries = loadHatcheries.slice(startIndex, endIndex);

  const closeForm = () => {
    setAddHatcheries(false);
  };
  const handleDelete = (id: string) => {
    setLoadHatcheries((prev) => prev.filter((mod) => mod.hatcheryId !== id));
  };

  const handleEditorAddHatcheries = (data: HatcheryPropsType) => {
    if (editingHatcheries) {
      setLoadHatcheries((prev) =>
        prev.map((mod) =>
          mod.hatcheryId === editingHatcheries.hatcheryId
            ? { ...data, userId: editingHatcheries.hatcheryId }
            : mod
        )
      );
      setEditingHatcheries(null);
    } else {
      setLoadHatcheries((prev) => [
        ...prev,
        { ...data, hatcheryId: crypto.randomUUID() },
      ]);
    }
    closeForm();
  };

  const onClose = () => {
    setAddFlocks(false);
  };

  const handleAddFlock = (data: FlockPropsType) => {
    setLoadFlocks((prev) => [
      ...prev,
      { ...data, flockId: crypto.randomUUID() },
    ]);
    closeForm();
  };

  useEffect(() => {
    if (addHatcheries) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [addHatcheries]);

  useEffect(() => {
    if (addFlocks) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [addFlocks]);

  return (
    <section className="rounded-lg py-6 bg-white border border-border px-4 shadow-sm flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <Header
          title="All Hatcheries"
          des="View all registered hatcheries in the system"
          button="Add Hatchery Farm"
          button2="Add Flock Details"
          onClick={() => {
            setEditingHatcheries(null);
            setAddHatcheries(true);
          }}
          onClick1={() => {
            setAddFlocks(true);
          }}
        />
        {paginatedHatcheries.length > 0 ? (
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="table-row">
                <th className="cell w-[15%]">Name</th>
                <th className="cell w-[15%]">Address</th>
                <th className="cell w-[18%]">Registered Number</th>
                <th className="cell w-[15%]">Owner</th>
                <th className="cell w-[15%]">Contact</th>
                <th className="cell w-[15%]">Renewal Status</th>
                <th className="cell w-[15%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedHatcheries.map((hatch) => (
                <tr key={hatch.hatcheryId} className="table-data">
                  <td className="cell">{hatch.name}</td>
                  <td className="cell">{hatch.address}</td>
                  <td className="cell">{hatch.registeredNumber}</td>
                  <td className="cell">{hatch.owner}</td>
                  <td className="cell">{hatch.contact}</td>
                  <td className="cell">
                    <span
                      className={`px-2 py-1 text-white text-sm rounded-sm ${
                        hatch.status == "active" ? "bg-green-400" : "bg-red-500"
                      }`}
                    >
                      {hatch.status}
                    </span>
                  </td>
                  <td className="cell">
                    <div className="flex gap-1 text-secondary text-base">
                      <FaEdit
                        className="text-blue-300"
                        onClick={() => {
                          setEditingHatcheries(hatch);
                          setAddHatcheries(true);
                        }}
                      />
                      <MdDelete
                        className="text-red-500"
                        onClick={() => handleDelete(hatch.hatcheryId)}
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
      {addHatcheries && (
        <HatcheryModal
          closeForm={closeForm}
          onSubmit={handleEditorAddHatcheries}
          initialData={editingHatcheries}
          title={editingHatcheries ? "Edit Hatchery" : "Add Hatchery Farm"}
          des={
            editingHatcheries
              ? "Update Hatchery info"
              : "Register a new hatchery farm in the system"
          }
        />
      )}
      {addFlocks && (
        <FlockModal closeForm={onClose} onSubmit={handleAddFlock} />
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

export default AllHatcheries;
