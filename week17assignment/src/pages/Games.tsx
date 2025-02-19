import React, { useState } from 'react';
import Sidebar2 from '../Sidebar2'; //created new components for styling on 2nd and 3rd pages
import Rightinfobar2 from '../Rightinfobar2';

const Games = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="d-flex flex-column vh-100">
      <div className="bg-transparent p-3 border border-black border-5 d-flex flex-column align-items-center justify-content-center w-100 font-weight-bold">
        <h1>Games Page</h1>
        <p>Welcome to the Games Page!</p>
      </div>
      <div className="d-flex flex-grow-1">
        <Sidebar2 isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
        <div className="bg-transparent p-3 border border-black border-5 d-flex flex-column align-items-center justify-content-center w-100 font-weight-bold">
          {/* Additional content can go here */}
        </div>
        <Rightinfobar2 />
      </div>
    </div>
  );
};

export default Games;