"use client";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import { BreedProps } from "@/types";
import NoDataCard from "../common/NoData";
import { FaEdit } from "react-icons/fa";
import { MdClose, MdDelete } from "react-icons/md";
import InputCard from "../common/InputField";
import Pagination from "../common/Pagination";

const BreedStandard = () => {
  const [addBreed, setAddBreed] = useState(false);
  const [loadBreed, setLoadBreed] = useState<BreedProps[]>([]);
  const [formData, setFormData] = useState({
    breedID: "",
    breedName: "",
    fertility: "",
    infertility: "",
    hatchability: "",
    mortality: "",
    healthyChicks: "",
    eggDamageRate: "",
    healthyAdultRate: "",
    unhealthyAdultRate: "",
    unhealthyChicks: "",
  });
  const [editingBreed, setEditingBreed] = useState<BreedProps | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);

  const items_per_page = 5;
  const totalItems = loadBreed.length;
  const startIndex = (currentPage - 1) * items_per_page;
  const endIndex = startIndex + items_per_page;
  const paginatedBreeds = loadBreed.slice(startIndex, endIndex);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.breedName.trim()) {
      newErrors.breedName = "Breed name is required";
    }

    const percentageFields = [
      "fertility",
      "infertility",
      "hatchability",
      "mortality",
      "healthyChicks",
      "unhealthyChicks",
      "eggDamageRate",
      "healthyAdultRate",
      "unhealthyAdultRate",
    ];

    percentageFields.forEach((field) => {
      const value = Number(formData[field as keyof typeof formData]);

      if (formData[field as keyof typeof formData] === "") {
        newErrors[field] = "This field is required";
      } else if (isNaN(value) || value < 0 || value > 100) {
        newErrors[field] = "Must be between 0 and 100";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    handleAddOrEditBreed(formData);
    setFormData({
      breedID: "",
      breedName: "",
      fertility: "",
      infertility: "",
      hatchability: "",
      mortality: "",
      healthyChicks: "",
      eggDamageRate: "",
      healthyAdultRate: "",
      unhealthyAdultRate: "",
      unhealthyChicks: "",
    });
    setAddBreed(false);
  };

  const handleAddOrEditBreed = (data: BreedProps) => {
    if (editingBreed) {
      setLoadBreed((prev) =>
        prev.map((breed) =>
          breed.breedID === editingBreed.breedID
            ? { ...data, breedID: editingBreed.breedID }
            : breed
        )
      );
      setEditingBreed(null);
    } else {
      setLoadBreed((prev) => [
        ...prev,
        { ...data, breedID: crypto.randomUUID() },
      ]);
    }
    setAddBreed(false);
  };

  const handleCancel = () => {
    setAddBreed(false);
    setEditingBreed(null);
    setFormData({
      breedID: "",
      breedName: "",
      fertility: "",
      infertility: "",
      hatchability: "",
      mortality: "",
      healthyChicks: "",
      eggDamageRate: "",
      healthyAdultRate: "",
      unhealthyAdultRate: "",
      unhealthyChicks: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id: string) => {
    setLoadBreed((prev) => prev.filter((breed) => breed.breedID !== id));
  };

  return (
    <section className="rounded-lg py-6 bg-white shadow-md border border-border px-4">
      <div className="flex flex-col gap-8">
        <Header
          title="Breed Standard Management"
          des="Configure baseline statistics for different chicken breeds"
          button="Add Breeds"
          onClick={() => {
            setAddBreed(true);
            setEditingBreed(null);
            setFormData({
              breedID: "",
              breedName: "",
              fertility: "",
              infertility: "",
              hatchability: "",
              mortality: "",
              healthyChicks: "",
              eggDamageRate: "",
              healthyAdultRate: "",
              unhealthyAdultRate: "",
              unhealthyChicks: "",
            });
          }}
        />
        {paginatedBreeds.length > 0 ? (
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="table-row">
                <th className="cell w-[20%]">Breed Name</th>
                <th className="cell w-[20%]">Fertility %</th>
                <th className="cell w-[20%]">Hatchability %</th>
                <th className="cell w-[20%]">Mortality %</th>
                <th className="cell w-[20%]">Healthy Chicks %</th>
                <th className="cell w-[20%]">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBreeds.map((breed) => (
                <tr key={breed.breedID} className="table-data">
                  <td className="cell capitalize">{breed.breedName}</td>
                  <td className="cell">{breed.fertility}</td>
                  <td className="cell">{breed.hatchability}</td>
                  <td className="cell">{breed.mortality}</td>
                  <td className="cell">{breed.healthyChicks}</td>
                  <td className="cell">
                    <div className="flex text-base gap-1 ">
                      <FaEdit
                        className="text-blue-500"
                        onClick={() => {
                          setEditingBreed(breed);
                          setFormData({ ...breed });
                          setAddBreed(true);
                        }}
                      />
                      <MdDelete
                        onClick={() => handleDelete(breed.breedID)}
                        className="text-red-500"
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
      {addBreed && (
        <section className="fixed inset-0 bg-black/50 z-30">
          <div className="flex items-center justify-center h-screen ">
            <div className="bg-white max-w-xl w-full rounded-lg px-8 py-6 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="modal-title">
                    {editingBreed
                      ? "Update Breed Standard"
                      : "Create New Breed Standard"}
                  </h1>
                  <h2 className="modal-des">
                    {editingBreed
                      ? "Update performance benchmarks for this breed"
                      : "Enter performance benchmarks for this breed"}
                  </h2>
                </div>
                <MdClose onClick={() => setAddBreed(false)} />
              </div>
              <hr className="h-px w-full" />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 py-2 h-[70vh] overflow-y-auto w-full px-4"
              >
                <InputCard
                  name="breedName"
                  value={formData.breedName}
                  onChange={handleInputChange}
                  title="BreedName"
                  type="text"
                  placeholder="Enter your breed"
                />
                <div className="flex gap-4">
                  <InputCard
                    name="fertility"
                    value={formData.fertility}
                    onChange={handleInputChange}
                    title="Fertility Rate (%)"
                    type="number"
                    placeholder="Enter fertility rate"
                  />
                  <InputCard
                    name="infertility"
                    value={formData.infertility}
                    onChange={handleInputChange}
                    title="Infertility Rate (%)"
                    type="number"
                    placeholder="Enter infertility rate"
                  />
                </div>
                <div className="flex gap-4">
                  <InputCard
                    name="eggDamageRate"
                    value={formData.eggDamageRate}
                    onChange={handleInputChange}
                    title="Egg Damage Rate (%)"
                    type="number"
                    placeholder="Enter egg damage rate"
                  />
                  <InputCard
                    name="hatchability"
                    value={formData.hatchability}
                    onChange={handleInputChange}
                    title="Hatchability (%)"
                    type="number"
                    placeholder="Enter hatchability rate"
                  />
                </div>
                <div className="flex gap-4">
                  <InputCard
                    name="healthyChicks"
                    value={formData.healthyChicks}
                    onChange={handleInputChange}
                    title="Healthy Chicks Rate (%)"
                    type="number"
                    placeholder="Enter healthy chicks rate"
                  />
                  <InputCard
                    name="unhealthyChicks"
                    value={formData.unhealthyChicks}
                    onChange={handleInputChange}
                    title="Unhealthy Chicks Rate (%)"
                    type="number"
                    placeholder="Enter unhealthy chicks rate"
                  />
                </div>
                <div className="flex gap-4">
                  <InputCard
                    name="mortality"
                    value={formData.mortality}
                    onChange={handleInputChange}
                    title="Mortality (%)"
                    type="number"
                    placeholder="Enter mortality rate"
                  />
                  <InputCard
                    name="healthyAdultRate"
                    value={formData.healthyAdultRate}
                    onChange={handleInputChange}
                    title="Healthy Adult Rate (%)"
                    type="number"
                    placeholder="Enter healthy adult rate"
                  />
                </div>
                <div className="w-[50%]">
                  <InputCard
                    name="unhealthyAdultRate"
                    value={formData.unhealthyAdultRate}
                    onChange={handleInputChange}
                    title="Unhealthy Adult Rate (%)"
                    type="number"
                    placeholder="Enter unhealthy adult rate"
                  />
                </div>

                <div className="flex gap-2 items-end justify-end pt-4">
                  <div
                    className="border border-primary rounded-md p-1 px-2 text-base"
                    onClick={handleCancel}
                  >
                    <button>Cancel</button>
                  </div>
                  <div className="rounded-md px-3 py-1 text-base bg-primary text-white">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
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

export default BreedStandard;
