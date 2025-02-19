// filepath: /c:/Users/whasu/OneDrive/Documents/coding/messing around/react testing/src/Sidebar2.tsx
import React, { useState } from 'react';

type Sidebar2Props = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

export default function Sidebar2({ isExpanded, setIsExpanded }: Sidebar2Props) {
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ display: "flex" }}>
      {isExpanded ? (
        <div
          className="border-black border-end border-5 bg-transparent p-2 d-flex flex-column"
          style={{ width: "20vw", maxWidth: "20vw" }}
        >
          {/* Empty Sidebar2 */}
        </div>
      ) : null}
      <button
        className="btn btn-primary p-2 border-3 border-black"
        onClick={handleButtonClick}
      >
        {isExpanded ? "<" : ">"}
      </button>
    </div>
  );
}