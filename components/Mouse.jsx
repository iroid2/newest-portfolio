"use client"
import React, { useEffect } from 'react';

const CursorComponent = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
    };

   


    document.addEventListener("mousemove", moveCursor);

    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    // Your component JSX here'
    <div className="cursor"></div>
  );
};

export default CursorComponent;
