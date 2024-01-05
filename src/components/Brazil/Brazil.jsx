import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";

import "../../styles/MainContent.css";
import ImageService from "../../services/image.service";

const Brazil = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const imageService = new ImageService();
      const fetchedPhotos = await imageService.listBraziliansImages();
      setPhotos(fetchedPhotos);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="gallery-container">
      <div className="title-home container">
        <h2>Pontos turísticos brasileiros</h2>
      </div>
      <div className="gallery-photos">
        {photos.map((p, index) => (
          <>
          <Card>
            <Card.Img variant="top" src={p.url} />
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
              <Card.Text>
                <p><strong>Continente</strong>: {p.continent}</p>
                <p><strong>País</strong>: {p.country}</p>
                <p><strong>Cidade</strong>:  {p.city}</p>
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

export default Brazil;