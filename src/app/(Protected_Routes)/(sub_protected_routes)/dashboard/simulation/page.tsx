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
    fertilityRate: "",
    mortalityRate: "",
    hatchabilityRate: "",
    healthyChickensRate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="globalContainer1 flex flex-col gap-2">
      <div className="flex items-center gap-2 bg-white border border-border rounded-md w-full px-4 py-2 text-sm text-primary tracking-wide">
        <CiWarning />
        <p>
          Simulation changes are temporary and for analysis only. They are not
          saved to the database.
        </p>
      </div>
      <section className="bg-white flex flex-col gap-1 border border-border rounded-md px-4 py-2">
        <h1 className="text-lg font-semibold">Simulation Tool</h1>
        <p className="text-secondary text-sm">
          Adjust parameters to simulate different scenarios (e.g., disease
          outbreak, improved management)
        </p>
        <div className="flex gap-3 py-1">
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
        <hr className="h-px mt-3" />

        <div className="pt-2 flex flex-col gap-4">
          <div className="flex justify-between">
            <h2 className="text-base tracking-wide font-semibold">
              Adjust Parameter
            </h2>
            <button className="border border-border text-xs p-1 rounded-md">
              Restore defaults
            </button>
          </div>
          <div className="flex gap-4">
            <InputCard
              name="mortalityRate"
              title="Mortality Rate (%)"
              type="number"
              onChange={handleInputChange}
              value={formData.mortalityRate}
              placeholder="Enter a number"
            />
            <InputCard
              name="fertilityRate"
              title="Fertility Rate"
              type="number"
              onChange={handleInputChange}
              value={formData.fertilityRate}
              placeholder="Enter a number"
            />
          </div>
          <div className="flex gap-4">
            <InputCard
              name="hatchabilityRate"
              title="Hatchability Rate (%)"
              type="number"
              onChange={handleInputChange}
              value={formData.hatchabilityRate}
              placeholder="Enter a number"
            />
            <InputCard
              name="healthyChickensRate"
              title="Healthy Chicken Rate (%)"
              type="number"
              onChange={handleInputChange}
              value={formData.healthyChickensRate}
              placeholder="Enter a number"
            />
          </div>
        </div>
        <div>{}</div>
      </section>
    </main>
  );
};

export default Simulation;
