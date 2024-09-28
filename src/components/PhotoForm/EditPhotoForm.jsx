import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firestore.config";
import "../../styles/PhotoForm.css";

const EditPhotoForm = ({ onEditSuccess }) => {
  const { photoId } = useParams();
  const [photoToEdit, setPhotoToEdit] = useState(null);
  const [title, setTitle] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      const docRef = doc(db, "landscapes", photoId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const photoData = docSnap.data();
        setPhotoToEdit(photoData);
        setTitle(photoData.title);
        setContinent(photoData.continent);
        setCountry(photoData.country);
        setCity(photoData.city);
      }
    };
    fetchPhotoDetails();
  }, [photoId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "landscapes", photoId);
      await updateDoc(docRef, {
        title,
        continent,
        country,
        city
      });
      setErrorMessage("Foto atualizada com sucesso.");
      onEditSuccess();
    } catch (error) {
      setErrorMessage("Erro ao atualizar imagem.");
    }
  };

  return (
    <div className="add-form container">
      <div className="title-add-form container">
        <h2>Editar imagem</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
          <input type="text" value={continent} onChange={(e) => setContinent(e.target.value)} placeholder="Continente" />
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="País" />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
          <br />
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