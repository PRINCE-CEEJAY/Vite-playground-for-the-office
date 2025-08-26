import React from "react";
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setMessage("You must fill the form");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      console.log(formData);
      setMessage("Submitted");
      setFormData({ email: "", password: "" });
      setLoading(false);
    }, 2000);
  };
  console.log(loading);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col min-w-sm gap-3">
        <p className="text-center text-amber-500">{message}</p>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">{loading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default Login;
