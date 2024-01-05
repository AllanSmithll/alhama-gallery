import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

import "../../styles/PhotoForm.css";
import { Link } from "react-router-dom";

const EditPhotoForm = ({ onEditSuccess }) => {
  const API_URL = "http://localhost:3001/photos";
  const { photoId } = useParams(); // Extrai o "photoId" da URL
  const [photoToEdit, setPhotoToEdit] = useState(null);
  const [title, setTitle] = useState(photoToEdit.title);
  const [continent, setContinent] = useState(photoToEdit.continent);
  const [country, setCountry] = useState(photoToEdit.country);
  const [city, setCity] = useState(photoToEdit.city);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      const response = await fetch(`${API_URL}/${photoId}`);
      const photoData = await response.json();
      setPhotoToEdit(photoData);
    };

    fetchPhotoDetails();
  }, [photoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPhoto = {
      title,
      continent,
      country,
      city,
    };
    try {
      const response = await fetch(`${API_URL}/${photoToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPhoto),
      });
      if (response.ok) {
        const updatedPhotoData = await response.json();
        onEditSuccess(updatedPhotoData);
        <Link to="/" />;
      } else {
        setErrorMessage("Erro ao atualizar imagem.");
      }
    } catch (error) {
      setErrorMessage("Erro de rede.");
    }
  };

  return (
    <div className="add-form container">
      <div className="title-add-form container">
        <h2>Editar imagem</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
          />
          <input
            type="text"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            placeholder="Continente"
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="País"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cidade"
          /><br />
          <span className="message-form">{errorMessage}</span>
          <br />
          <Button onClick={handleSubmit}>
            <FontAwesomeIcon className="icon-pencil-alt" icon={faPencilAlt} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditPhotoForm;