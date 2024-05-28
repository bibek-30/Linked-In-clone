"use client"
import React, { useState } from "react";

const ModelComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const openModel = () => {
    setIsOpen(true);
  };

  const closeModel = () => {
    setIsOpen(false);
  };

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      console.log("response", formData)
      // try {
      //   const response = await fetch('/api/saveData', {
      //     method: 'POST',
      //     body: JSON.stringify(formData),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });
      //   const data = await response.json();
      //   console.log('Success:', data);
      // } catch (error) {
      //   console.error('Error:', error);
      // }
    };

  return (
    <>
      <button onClick={openModel}>Strat a post,try writing with AI</button>
      {isOpen && (
        <div className="model">
          <div className="model-content">
            <span className="close" onClick={closeModel}>
              &times;
            </span>
            <p>This is the content of the model.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelComponent;
