"use client";
import InputCard from "@/components/common/InputField";
import SelectCard from "@/components/common/SelectCard";
import { SimulationData } from "@/constants";
import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";

const Simulation = () => {
  const [formData, setFormData] = useState({
    breed: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(value, "target");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="globalContainer flex flex-col gap-6">
      <section className="flex items-center gap-2 bg-white border border-border rounded-md w-full px-4 py-2 text-base font-semibold">
        <CiWarning />
        <p>
          Simulation changes are temporary and for analysis only. They are not
          saved to the database.
        </p>
      </section>
      <section className="bg-white flex flex-col gap-3 border border-border rounded-md px-6 py-4">
        <h1 className="text-lg font-medium">Simulation Tool</h1>
        <p className="text-[#0000004D] text-base">
          Adjust parameters to simulate different scenarios (e.g., disease
          outbreak, improved management)
        </p>
        <div className="flex gap-3">
          <SelectCard
            name="breed"
            value={formData.breed}
            title="Breed"
            options={SimulationData}
            onChange={handleInputChange}
          />
          <InputCard
            name="startDate"
            title="Start Date"
            type="date"
            onChange={handleInputChange}
            value={formData.startDate}
            placeholder=""
          />
          <InputCard
            name="endDate"
            title="End Date"
            type="date"
            onChange={handleInputChange}
            value={formData.endDate}
            placeholder=""
          />
        </div>
        <hr className="h-px mt-2" />

        <div>
          <h2>Adjust Parameter</h2>
          <div>
            <InputCard
              name="startDate"
              title="Start Date"
              type="date"
              onChange={handleInputChange}
              value={formData.startDate}
              placeholder=""
            />
            <InputCard
              name="endDate"
              title="End Date"
              type="date"
              onChange={handleInputChange}
              value={formData.endDate}
              placeholder=""
            />
          </div>
          <div>
            <InputCard
              name="startDate"
              title="Start Date"
              type="date"
              onChange={handleInputChange}
              value={formData.startDate}
              placeholder=""
            />
            <InputCard
              name="endDate"
              title="End Date"
              type="date"
              onChange={handleInputChange}
              value={formData.endDate}
              placeholder=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simulation;
