import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"; // Import react-icons
import "./footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Jangan Lewatkan Update! Ikuti Kami di Media Sosial!</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram />
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <FaGem className="me-3" /> */}
                Dinas Pariwisata dan Kebudayaan Pemerintah Kota Bogor
              </h6>
              <p>
                Jalan Pandu Raya No. 45, Tegal Gundil, Bogor Tengah, Tegal
                Gundil, Bogor Utara, Kota Bogor Jawa Barat - Indonesia 16121
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">Tentang</h6>
              <p>
                <a href="#!" className="text-reset">
                  Tentang Kami
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">Layanan</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pendataan Usaha
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">Kontak Kami</h6>
              <p>
                <FaEnvelope className="me-3" /> parbudkotabogor@gmail.com
              </p>
              <p>
                <FaEnvelope className="me-3" /> disparbud@kotabogor.go.id
              </p>
              <p>
                <FaPhone className="me-3" /> + 62251- 8328827
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 copyright">
        © 2024 Copyright: Pemerintahan Kota Bogor
      </div>
    </footer>
  );
}

export default Footer;
