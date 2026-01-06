import React, { useState } from "react";
import InputCard from "../common/InputField";
import { MdClose } from "react-icons/md";
import { UserModalProps, UserProps } from "@/types";
import { Status } from "@/constants";
import SelectCard from "../common/SelectCard";

const UserModal: React.FC<
  UserModalProps & { initialData?: UserProps | null }
> = ({ closeForm, onSubmit, title, des, initialData = null }) => {
  const [formData, setFormData] = useState({
    userId: initialData?.userId || "",
    userName: initialData?.userName || "",
    fullName: initialData?.fullName || "",
    email: initialData?.email || "",
    status: initialData?.status || "active",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    closeForm();
    setFormData({
      userId: "",
      userName: "",
      fullName: "",
      email: "",
      status: "active",
    });
  };

  const handleCancel = () => {
    closeForm();
    setFormData({
      userId: "",
      userName: "",
      fullName: "",
      email: "",
      status: "active",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(value, "this is test");

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="fixed inset-0 bg-black/50 z-30">
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white max-w-lg w-full rounded-lg px-8 py-6 flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="modal-title">{title}</h1>
              <h2 className="modal-des">{des}</h2>
            </div>
            <MdClose onClick={closeForm} />
          </div>
          <hr className="h-px w-full" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
            <InputCard
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              title="Username"
              type="text"
              placeholder="Enter your username"
            />
            {/* <InputCard
                    name="password"
                    onChange={handleInputChange}
                    title="Password"
                    type="password"
                    placeholder=""
                  /> */}
            <InputCard
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              title="Fullname"
              type="text"
              placeholder="Enter your fullname"
            />
            <InputCard
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              title="Email"
              type="email"
              placeholder="Enter your email"
            />
            <SelectCard
              title="Status"
              value={formData.status}
              options={Status}
              onChange={handleInputChange}
              name="status"
            />
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

export default UserModal;
