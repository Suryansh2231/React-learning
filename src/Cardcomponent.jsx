
import React from "react";

function Card({ color, handleclick }) {
  return (
    <button 
      onClick={() => handleclick(color)}
      className="text-white font-bold py-2 px-4 rounded-full"
      style={{ backgroundColor: color, height : 100 , width:100  }}
    >
      {color}
    </button>
  );
}
export default Card;