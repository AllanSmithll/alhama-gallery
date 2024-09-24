// src/components/DisplayData.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firestore.config";

const DisplayData = () => {
  const [landscapes, setlandscapes] = useState([]);
  const [novoNome, setNovoNome] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "landscapes"));
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setlandscapes(data);
    };

    fetchData();
  }, []);

  const handleUpdate = async (id) => {
    const paisagemRef = doc(db, "landscapes", id);
    await updateDoc(paisagemRef, { nome: novoNome });
    setEditandoId(null);
  };

  const handleDelete = async (id) => {
    const paisagemRef = doc(db, "landscapes", id);
    await deleteDoc(paisagemRef);
    setlandscapes(landscapes.filter((paisagem) => paisagem.id !== id));
  };

  return (
    <div>
      <h2>Paisagens do Firestore</h2>
      <ul>
        {landscapes.map((paisagem) => (
          <li key={paisagem.id}>
            {editandoId === paisagem.id ? (
              <div>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Novo nome da paisagem"
                />
                <button onClick={() => handleUpdate(paisagem.id)}>Salvar</button>
                <button onClick={() => setEditandoId(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                {paisagem.nome} - {paisagem.pais}
                <button onClick={() => { setEditandoId(paisagem.id); setNovoNome(paisagem.nome); }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(paisagem.id)}>Deletar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;