import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firestore.config";
import "../../styles/MainContent.css";

const Brazil = () => {
  const [landscapes, setLandscapes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLandscapes = async () => {
      try {
        const q = query(
          collection(db, "landscapes"),
          where("country", "==", "Brasil")
        );
        const querySnapshot = await getDocs(q);
        const fetchedLandscapes = querySnapshot.docs.map((doc) => doc.data());
        setLandscapes(fetchedLandscapes);
      } catch (error) {
        console.error("Erro ao buscar os pontos turísticos:", error);
      } finally {
        setLoading(false); // Para parar o carregamento após a busca
      }
    };

    fetchLandscapes();
  }, []);

  return (
    <div className="gallery-container">
      <div className="title-home container">
        <h2>Pontos turísticos brasileiros</h2>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : landscapes.length === 0 ? (
        <p>Não foram encontrados pontos turísticos no Brasil.</p>
      ) : (
        <div className="gallery-landscapes">
          {landscapes.map((p, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={p.url} alt={p.title} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  <p><strong>Continente</strong>: {p.continent}</p>
                  <p><strong>País</strong>: {p.country}</p>
                  <p><strong>Cidade</strong>: {p.city}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Brazil;