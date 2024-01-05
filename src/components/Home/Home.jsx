import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "../../styles/MainContent.css";
import ImageService from "../../services/image.service";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const imageService = new ImageService();
      const fetchedPhotos = await imageService.list();
      setPhotos(fetchedPhotos);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="gallery-container">
      <div className="title-home container">
        <h2>Pontos turísticos</h2>
      </div>
      <div className="gallery-photos">
        {photos.map((p) => (
          <>
            <Card>
              <Card.Img variant="top" src={p.url} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Continente</strong>: {p.continent}
                  </p>
                  <p>
                    <strong>País</strong>: {p.country}
                  </p>
                  <p>
                    <strong>Cidade</strong>: {p.city}
                  </p>
                </Card.Text>
                {/* <Link to={`/edit-photo-form/${p.id}`}>
                  <Button className="btn-primary">
                    <FontAwesomeIcon
                      className="icon-pencil-alt"
                      icon={faPencilAlt}
                    />
                  </Button>
                </Link> */}
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
