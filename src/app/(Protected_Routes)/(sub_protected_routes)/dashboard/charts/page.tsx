"use client";
import InputCard from "@/components/common/InputField";
import SelectCard from "@/components/common/SelectCard";
import { Status } from "@/constants";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Charts = () => {
  const [formData, setFormData] = useState({
    filterByBreed: "",
    startDate: "",
    endDate: "",
    production: "",
  });

  const hatchdata = [
    { date: "2/24", male: 1400, female: 3400 },
    { date: "3/24", male: 2000, female: 2400 },
    { date: "4/24", male: 3040, female: 1300 },
    { date: "5/24", male: 2400, female: 1600 },
    { date: "6/24", male: 1400, female: 3400 },
    { date: "7/24", male: 2000, female: 2400 },
    { date: "8/24", male: 3040, female: 1300 },
    { date: "9/24", male: 2400, female: 1600 },
    { date: "10/24", male: 1400, female: 3400 },
    { date: "11/24", male: 2000, female: 2400 },
    { date: "12/24", male: 3040, female: 1300 },
    { date: "13/24", male: 2400, female: 1600 },
  ];
  5;
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
    <main className="globalContainer flex flex-col gap-5">
      <header className="flex flex-col gap-1  rounded-md ">
        <h1 className="modal-title font-semibold text-lg tracking-wide">
          Data Visualization
        </h1>
        <p className="modal-des text-sm -mt-2">
          Interactive charts showing production trends and distributions
        </p>
        <div className="flex gap-4 py-2">
          <SelectCard
            name="filterByBreed"
            title="Filter By Breed"
            value={formData.filterByBreed}
            onChange={handleInputChange}
            options={Status}
          />
          <InputCard
            title="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
            placeholder="Brief summary of the case."
          />
          <InputCard
            title="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            placeholder="Brief summary of the case."
          />
          <SelectCard
            name="production"
            title="Production period"
            value={formData.production}
            onChange={handleInputChange}
            options={Status}
          />
        </div>
        <span className="text-xs tracking-wide text-secondary">
          Showing 7 out of 7 records
        </span>
      </header>
      <section className="border border-border rounded-md px-4 py-2 w-full h-110 focus:outline-none flex flex-col gap-8">
        <div className="px-4">
          <h1 className="text-lg font-bold">Intake Over Time</h1>
          <span className="text-sm text-secondary">
            Monthly chick intake trends
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={hatchdata}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" padding={{ left: 20, right: 20 }} />
            <YAxis ticks={[0, 1000, 2000, 3000, 4000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="male"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line type="monotone" dataKey="female" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
};

export default Charts;
