"use client"
import React, { useState } from "react";

const ModelComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModel = () => {
    setIsOpen(true);
  };

  const closeModel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModel}>Open Model</button>
      {isOpen && (
        <div className="model">
          <div className="model-content">
            <div className="model-head">
            <p>Bibek Shrestha</p>
            <span className="close" onClick={closeModel}>
              &times;
            </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelComponent;
