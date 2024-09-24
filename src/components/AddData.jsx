// src/components/AddData.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firestore.config";

const AddData = () => {
  const [nome, setNome] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, "landscapes"), {
        nome: nome,
        pais: pais,
      });
      console.log("Documento adicionado com ID: ", docRef.id);
      setNome("");
      setPais("");
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da paisagem"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="País"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      />
      <button type="submit">Adicionar Paisagem</button>
    </form>
  );
};

export default AddData;
