import React, { useState, useEffect, useCallback } from "react";
import { Card, Button } from "react-bootstrap";
import { collection, getDocs, query, where, orderBy, startAfter, limit } from "firebase/firestore";
import { db } from "../firestore.config";
import "../styles/MainContent.css";

const PAGE_SIZE = 9;

const PaginationComponent = ({ collectionName, filter }) => {
  const [items, setItems] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [firstDoc, setFirstDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchItems = useCallback(async (cursor = null, direction = "next") => {
    setLoading(true);

    let q = query(
      collection(db, collectionName),
      orderBy("title"),
      limit(PAGE_SIZE)
    );

    if (filter) {
      q = query(q, where(filter.field, "==", filter.value));
    }

    if (cursor) {
      q = direction === "next" ? query(q, startAfter(cursor)) : q;
    }

    const querySnapshot = await getDocs(q);
    const fetchedItems = querySnapshot.docs.map(doc => doc.data());

    if (querySnapshot.docs.length > 0) {
      setFirstDoc(querySnapshot.docs[0]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }

    setItems(fetchedItems);
    setLoading(false);
  }, [collectionName, filter]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="gallery-container">
      {loading ? (
        <p>Carregando...</p>
      ) : items.length === 0 ? (
        <p>Nenhum item encontrado.</p>
      ) : (
        <div className="gallery-landscapes">
          {items.map((p, index) => (
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
      <div className="pagination-buttons">
        <Button onClick={() => fetchItems(firstDoc, "prev")} disabled={!firstDoc}>
          Anterior
        </Button>
        <Button onClick={() => fetchItems(lastDoc, "next")} disabled={!lastDoc}>
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default PaginationComponent;