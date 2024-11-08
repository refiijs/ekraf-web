import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaInstagram } from "react-icons/fa"; // Import ikon dari react-icons
import "./detail-produk.css";
import DataProduk from "./data-produk"; // Impor data produk
import img from "../../Assets/img/img.png";

const DetailProduk = () => {
  const { id } = useParams();
  const parsedId = Number(id);
  const produk = DataProduk.find((item) => item.id === parsedId); // Temukan produk berdasarkan ID

  if (!produk) {
    return <div>Produk tidak ditemukan.</div>; // Jika produk tidak ditemukan
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Bagian gambar */}
          <div className="image-card">
            <img
              src={img} // Ganti path dengan gambar produk
              alt={produk.nama}
              className="img-fluid rounded"
            />
          </div>
        </div>
        {/* Detail produk */}
        <div className="col-md-6">
          <h2>{produk.nama}</h2>
          <h5 className="text-muted">Range Harga: {produk.harga}</h5>
          <p className="mt-3">{produk.deskripsi}</p>
          <div className="contact-info">
            <h6>
              <strong>Kontak:</strong>
            </h6>
            <p>
              <FaPhone /> {produk.kontak} {/* Ikon untuk kontak */}
            </p>
            <p>
              <FaInstagram />{" "}
              <a
                href={produk.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }} // Gaya untuk tautan
              >
                {produk.instagram.split("/").pop()}{" "}
                {/* Menampilkan username dari link Instagram */}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Bagian alamat */}
      <div className="mt-5">
        <h4>Alamat Usaha</h4>
        <div className="card">
          <div className="card-body p-0">
            <iframe
              src={produk.mapSrc}
              width="100%"
              height="300"
              className="map-frame"
              allowFullScreen
              loading="lazy"
              title="Business Location"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Padding tambahan sebelum footer */}
      <div className="padding-footer"></div>
    </div>
  );
};

export default DetailProduk;
