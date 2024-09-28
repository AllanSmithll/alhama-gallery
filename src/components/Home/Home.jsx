import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firestore.config";
import "../../styles/MainContent.css";

const Home = () => {
  const [landscapes, setlandscapes] = useState([]);

  useEffect(() => {
    const fetchlandscapes = async () => {
      const querySnapshot = await getDocs(collection(db, "landscapes"));
      const fetchedlandscapes = querySnapshot.docs.map((doc) => doc.data());
      setlandscapes(fetchedlandscapes);
    };

    fetchlandscapes();
  }, []);

  return (
    <div className="gallery-container">
      <div className="title-home container">
        <h2>Pontos turísticos</h2>
      </div>
      <div className="gallery-landscapes">
        {landscapes.map((p, index) => (
          <>
            <Card key={index}>
              <Card.Img variant="top" src={p.url} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  <p><strong>Continente</strong>: {p.continent}</p>
                  <p><strong>País</strong>: {p.country}</p>
                  <p><strong>Cidade</strong>: {p.city}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;