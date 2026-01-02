"use client";
import { LogInProps } from "@/types";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const LogIn = () => {
  const [formData, setFormData] = useState<LogInProps>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LogInProps>>({});
  // const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const validationErrors: Partial<LogInProps> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...formData,
      });
      console.log(res);

      if (!res?.ok) {
        setIsLoading(false);
        return;
      }
      setTimeout(() => {
        setIsLoading(false);
        redirect("/dashboard/overview");
      }, 500);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-100 w-100 rounded-md shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-8">LOG IN</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-xs mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border rounded-md px-3 py-2 mt-2"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          <div className="flex flex-col mb-2 w-xs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border rounded-md px-3 py-2 mt-2"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm my-1">{errors.password}</p>
          )}

          <button
            type="submit"
            className="text-center w-xs bg-blue-600 rounded-md py-2 mt-3"
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
