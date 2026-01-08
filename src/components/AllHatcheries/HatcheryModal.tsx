import { HatcheryModalProps, HatcheryPropsType } from "@/types";
import React, { useState } from "react";
import InputCard from "../common/InputField";
import { MdClose } from "react-icons/md";

const HatcheryModal: React.FC<
  HatcheryModalProps & { initialData?: HatcheryPropsType | null }
> = ({ closeForm, onSubmit, title, des, initialData = null }) => {
  const [formData, setFormData] = useState({
    hatcheryId: initialData?.hatcheryId || "",
    registeredNumber: initialData?.registeredNumber || "",
    name: initialData?.name || "",
    address: initialData?.address || "",
    owner: initialData?.owner || "",
    contact: initialData?.contact || "",
    status: initialData?.status || "active",
    yearEstd: initialData?.yearEstd || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    closeForm();
    setFormData({
      hatcheryId: initialData?.hatcheryId || "",
      registeredNumber: initialData?.registeredNumber || "",
      name: initialData?.name || "",
      address: initialData?.address || "",
      owner: initialData?.owner || "",
      contact: initialData?.contact || "",
      status: initialData?.status || "active",
      yearEstd: initialData?.yearEstd || "",
    });
  };

  const handleCancel = () => {
    closeForm();
    setFormData({
      hatcheryId: "",
      registeredNumber: "",
      name: "",
      address: "",
      owner: "",
      contact: "",
      status: "",
      yearEstd: "",
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
        <div className="bg-white max-w-xl w-full rounded-lg px-8 py-6 flex flex-col gap-2 border border-border">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="modal-title">{title}</h1>
              <h2 className="modal-des">{des}</h2>
            </div>
            <MdClose onClick={closeForm} />
          </div>
          <hr className="h-px w-full" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            <div className="flex gap-4">
              <InputCard
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                title="Hatchery Name"
                type="text"
                placeholder="Enter your hatchery name"
              />
              <InputCard
                name="registeredNumber"
                value={formData.registeredNumber}
                onChange={handleInputChange}
                title="Registered Number"
                type="text"
                placeholder="Enter your registered Number"
              />
            </div>
            <div className="flex gap-4">
              <InputCard
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                title="Address"
                type="text"
                placeholder="Enter your address"
              />
              <InputCard
                name="yearEstd"
                value={formData.yearEstd}
                onChange={handleInputChange}
                title="Established Year"
                type="date"
                placeholder="Enter date of establishment"
              />
            </div>
            <div className="flex gap-4">
              <InputCard
                name="owner"
                value={formData.owner}
                onChange={handleInputChange}
                title="Owner Name"
                type="text"
                placeholder="Enter your name"
              />
              <InputCard
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                title="Contact"
                type="text"
                placeholder="Enter your contact"
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
  );
};

export default HatcheryModal;
