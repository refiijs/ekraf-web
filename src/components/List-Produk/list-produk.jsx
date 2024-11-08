import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list-produk.css"; // Custom CSS

const products = [
  { id: 1, name: "Nama Produk", address: "Alamat" },
  { id: 2, name: "Nama Produk", address: "Alamat" },
  { id: 3, name: "Nama Produk", address: "Alamat" },
  { id: 4, name: "Nama Produk", address: "Alamat" },
  { id: 5, name: "Nama Produk", address: "Alamat" },
  { id: 6, name: "Nama Produk", address: "Alamat" },
  { id: 7, name: "Nama Produk", address: "Alamat" },
  { id: 8, name: "Nama Produk", address: "Alamat" },
];

function ListProduk() {
  return (
    <Container className="text-center my-5">
      <h1 className="title">Kuliner</h1>
      <p className="subtitle">
        Merangkul cita rasa dan inovasi untuk memuaskan lidah
      </p>

      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={index} xs={6} md={3}>
            <Link
              to={`/detail-produk/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="h-100 shadow-sm product-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title className="product-name">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="product-address">
                    {product.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListProduk;
