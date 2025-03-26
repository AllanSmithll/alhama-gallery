import React from "react";
import PaginationComponent from "../Pagination";

const Home = () => {
  return (
    <div>
      <div className="title-home container">
        <h2>Pontos turísticos</h2>
      </div>
      <PaginationComponent collectionName="landscapes" />
    </div>
  );
};

export default Home;