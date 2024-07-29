import React, { useState, useEffect } from "react";

export default function AutoSaveForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    e.preventDefault();
    setIsDisplayed(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem("formData", JSON.stringify(formData));
      
    }, 2000);

    return () => clearInterval(interval);
  }, [formData]);

  return (
    <>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={formData.name}
        />
        <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={formData.email}
        />
        <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleInputChange}
            value={formData.phoneNumber}
        />
        <button type="submit">Submit</button>
        </form>
        
    </>
  );
}
