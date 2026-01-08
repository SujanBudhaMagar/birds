"use client";
import InputCard from "@/components/common/InputField";
import SelectCard from "@/components/common/SelectCard";
import { Status } from "@/constants";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

const SubmitReport = () => {
  const [formData, setFormData] = useState({
    type: "",
    subject: "",
    des: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted successfully.");
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
    <div className="globalContainer1">
      <section className="flex flex-col gap-3 bg-white border border-border rounded-md w-full px-4 py-3">
        <div className="flex gap-1 items-center font-semibold text-xl tracking-wide">
          <RiErrorWarningLine />
          <h1>Submit Report or Complaint</h1>
        </div>
        <p className="text-secondary text-base">
          Report issues, submit complaints or request new features
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <SelectCard
            name="type"
            title="Type"
            value={formData.type}
            onChange={handleInputChange}
            options={Status}
          />
          <InputCard
            title="Subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Brief summary of the case."
          />
          <InputCard
            title="Description"
            name="des"
            type="text"
            value={formData.des}
            onChange={handleInputChange}
            placeholder="Provide detailed information about your issue/report"
          />
          <button
            type="submit"
            className="flex gap-1 items-center bg-primary text-white p-2 rounded-md w-44 mt-4"
          >
            <IoIosSend />
            <span>Submit Report</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default SubmitReport;
