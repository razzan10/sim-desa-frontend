import React, { useState } from "react";
import beritaData from "../informasi/berita";
import { motion } from "framer-motion";
import "../styles/Berita.css";

function Berita() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="berita-section">
      <div className="container">
        <h2 className="section-title">Berita Terbaru</h2>
        <div className="berita-list">
          {beritaData.map((berita, index) => (
            <motion.div
              className="berita-card"
              key={berita.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3>{berita.judul}</h3>
              <p className="berita-date">{berita.tanggal}</p>
              <p>
                {expandedId === berita.id
                  ? berita.isi
                  : berita.isi.slice(0, 100) + "..."}
              </p>
              <button
                className="read-more-btn"
                onClick={() => toggleReadMore(berita.id)}
              >
                {expandedId === berita.id ? "Tutup" : "Lihat Selengkapnya"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Berita;
