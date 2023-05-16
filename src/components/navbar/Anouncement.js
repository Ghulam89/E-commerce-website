import React, { useState } from "react";
import './navbar.css';
const Anouncement = () => {

   
  return (
    <>
      <div
        class="text-center position-relative px-4 py-1"
        id="anouncement   close"
        style={{ backgroundColor: "#EA4335", color: "#fff" }}
      >
        <span>
          Get 50% discount in all product from May 2022 to December2022
        </span>
        <span class="__close-anouncement" >
          X
        </span>
      </div>
    </>
  );
};

export default Anouncement;
