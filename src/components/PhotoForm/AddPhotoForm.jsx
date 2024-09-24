import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firestore.config";
import "../../styles/PhotoForm.css";

const AddPhotoForm = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const isEmpty = (value) => value.trim() === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const areInputsEmpty = isEmpty(url) || isEmpty(title) || isEmpty(continent) || isEmpty(country) || isEmpty(city) || width === 0 || height === 0;

    if (areInputsEmpty) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "landscapes"), {
        url,
        title,
        continent,
        country,
        city,
        width,
        height
      });
      setUrl("");
      setTitle("");
      setContinent("");
      setCountry("");
      setCity("");
      setWidth(0);
      setHeight(0);
      setMessage("Imagem criada com sucesso.");
    } catch (error) {
      setMessage("Erro ao criar imagem.");
      console.error(error);
    }
  };

  return (
    <div className="add-form container">
      <div className="title-add-form container">
        <h2>Adicionar Paisagem</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
          <input type="text" value={continent} onChange={(e) => setContinent(e.target.value)} placeholder="Continente" />
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="País" />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade" />
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Largura" />
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Altura" />
          <br />
          <span className="message-form">{message}</span>
          <br />
          <Button onClick={handleSubmit}>
            <FontAwesomeIcon className="icon-plus" icon={faPlus} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPhotoForm;