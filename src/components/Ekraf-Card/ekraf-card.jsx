import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ekraf-card.css";

function EkrafCard({ title, description, icon, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/list-produk/${id}`);
    } else {
      console.error("ID tidak ditemukan untuk navigasi.");
    }
  };

  return (
    <Card className="ekraf-card" onClick={handleClick}>
      <Card.Body>
        <div className="ekraf-icon">{icon}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EkrafCard;
