import React, { useState } from 'react';

export default function Rightinfobar2() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ display: "flex" }}>
      <button
        className="btn btn-primary p-2 border-3 border-black"
        onClick={handleButtonClick}
      >
        {isExpanded ? ">" : "<"}
      </button>
      {isExpanded ? (
        <div
          className="border-black border-start border-5 bg-transparent p-2 d-flex flex-column"
          style={{ width: "20vw", maxWidth: "20vw" }}
        >
          {/* Empty Rightinfobar2 */}
        </div>
      ) : null}
    </div>
  );
}