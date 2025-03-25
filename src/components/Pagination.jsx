import React, { useState, useEffect, useCallback } from "react";
import { Card, Button } from "react-bootstrap";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter
} from "firebase/firestore";
import { db } from "../firestore.config";
import "../styles/MainContent.css";

const PAGE_SIZE = 9;

const PaginationComponent = ({ collectionName, filter }) => {
  const [items, setItems] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchItems = useCallback(async (cursor = null) => {
    setLoading(true);
  
    let q = collection(db, collectionName);
  
    q = query(q, orderBy("title"));
  
    if (cursor) {
      q = query(q, startAfter(cursor));
    }
  
    q = query(q, limit(PAGE_SIZE));
  
    const querySnapshot = await getDocs(q);
    let fetchedItems = querySnapshot.docs.map(doc => doc.data());

    if (filter) {
      fetchedItems = fetchedItems.filter(item => item[filter.field] === filter.value);
    }
  
    setIsFirstPage(cursor === null);
    setHasMore(querySnapshot.docs.length === PAGE_SIZE);
    setItems(fetchedItems);
  
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] || null);
  
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
        <Button onClick={() => fetchItems()} disabled={isFirstPage}>
          Anterior
        </Button>
        <Button onClick={() => fetchItems(lastDoc)} disabled={!hasMore}>
          Próximo
        </Button>
      </div>
    </div>
  );
};

export default PaginationComponent;