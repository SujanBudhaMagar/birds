import React, { useState } from "react";
import InputCard from "../common/InputField";
import { MdClose } from "react-icons/md";
import { FlockModalProps, FlockPropsType } from "@/types";
import { FaSearch } from "react-icons/fa";
import SelectCard from "../common/SelectCard";
import { Status } from "@/constants";

const FlockModal: React.FC<
  FlockModalProps & { initialData?: FlockPropsType | null }
> = ({ closeForm, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    noOfMaleChicks: initialData?.noOfMaleChicks || "",
    noOfFemaleChicks: initialData?.noOfFemaleChicks || "",
    breed: initialData?.breed || "",
    purposeOfSelection: initialData?.purposeOfSelection || "",
    source: initialData?.source || "",
    dateOfPlacement: initialData?.dateOfPlacement || "",
    dateOfBirth: initialData?.dateOfBirth || "",
    dateOfShipment: initialData?.dateOfShipment || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    closeForm();
    setFormData({
      noOfMaleChicks: initialData?.noOfMaleChicks || "",
      noOfFemaleChicks: initialData?.noOfFemaleChicks || "",
      breed: initialData?.breed || "",
      purposeOfSelection: initialData?.purposeOfSelection || "",
      source: initialData?.source || "",
      dateOfPlacement: initialData?.dateOfPlacement || "",
      dateOfBirth: initialData?.dateOfBirth || "",
      dateOfShipment: initialData?.dateOfShipment || "",
    });
  };

  const handleCancel = () => {
    closeForm();
    setFormData({
      noOfMaleChicks: "",
      noOfFemaleChicks: "",
      breed: "",
      purposeOfSelection: "",
      source: "",
      dateOfPlacement: "",
      dateOfBirth: "",
      dateOfShipment: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="fixed inset-0 bg-black/50 z-30">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white max-w-3xl w-full rounded-lg px-8 py-6 flex flex-col gap-2 border border-border">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="modal-title">Add Flock Detail</h1>
              <h2 className="modal-des">
                Record detailed information about a new flock
              </h2>
            </div>
            <MdClose onClick={closeForm} />
          </div>
          <div className="flex gap-5 mb-2">
            <h1>Recent</h1>
            <span className="bg-gray-300 rounded-lg text-xs p-1">
              Kathmandu Poultry
            </span>
          </div>
          <div className="flex border border-border shadow-sm w-xs relative rounded-md">
            <FaSearch className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transform left-6 text-secondary" />
            <input
              type="text"
              name=""
              placeholder="Latest Hatchery"
              className="w-full px-12 py-2 appearance-none rounded-md"
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            <div className="flex gap-4">
              <InputCard
                name="noOfMaleChicks"
                value={formData.noOfMaleChicks}
                onChange={handleInputChange}
                title="No of Male Chicks"
                type="number"
                placeholder="Enter a no."
              />
              <InputCard
                name="noOfFemaleChicks"
                value={formData.noOfFemaleChicks}
                onChange={handleInputChange}
                title="No of Female Chicks"
                type="number"
                placeholder="Enter a no."
              />
              <SelectCard
                title="Breed"
                value={formData.breed}
                options={Status}
                onChange={handleInputChange}
                name="breed"
              />
            </div>
            <div className="flex gap-4">
              <SelectCard
                title="Source"
                value={formData.source}
                options={Status}
                onChange={handleInputChange}
                name="source"
              />
              <SelectCard
                title="Purpose Of Selection"
                value={formData.purposeOfSelection}
                options={Status}
                onChange={handleInputChange}
                name="purposeOfSelection"
              />
            </div>
            <div className="flex gap-4">
              <InputCard
                name="dateOfPlacement"
                value={formData.dateOfPlacement}
                onChange={handleInputChange}
                title="No of Female Chicks"
                type="date"
                placeholder="Enter a no."
              />
              <InputCard
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                title="Date of Birth"
                type="date"
                placeholder="Enter a no."
              />
            </div>
            <div className="w-[50%]">
              <InputCard
                name="dateOfShipment"
                value={formData.dateOfShipment}
                onChange={handleInputChange}
                title="Date of Shipment"
                type="date"
                placeholder="Enter a no."
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
                <button type="submit">Add Details</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FlockModal;
