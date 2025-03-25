import React from "react";
import PaginationComponent from "../Pagination";

const Brazil = () => {
  return (
    <div>
      <div className="title-home container">
        <h2>Pontos turísticos brasileiros</h2>
      </div>
      <PaginationComponent 
        collectionName="landscapes" 
        filter={{ field: "country", value: "Brasil" }} 
      />
    </div>
  );
};

export default Brazil;
