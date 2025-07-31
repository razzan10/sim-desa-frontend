import { useEffect, useState } from "react";
import "../styles/News.css";

function News() {
  const [news, setNews] = useState([]);
  const [formData, setFormData] = useState({
    judul: "",
    isi: "",
    tanggal: "",
    gambar: null,
  });

  // Fetch berita dari backend
  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetch berita:", err));
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      alert(result.message);
      window.location.reload(); // refresh biar langsung update
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Berita Desa</h2>

      {/* Form Tambah Berita */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="judul"
          placeholder="Judul Berita"
          value={formData.judul}
          onChange={handleChange}
          required
        />
        <textarea
          name="isi"
          placeholder="Isi Berita"
          value={formData.isi}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="tanggal"
          value={formData.tanggal}
          onChange={handleChange}
          required
        />
        <input type="file" name="gambar" onChange={handleChange} />
        <button type="submit">Tambah Berita</button>
      </form>

      {/* List Berita */}
      <div className="news-list">
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="news-card">
              {item.gambar && (
                <img
                  src={`http://localhost:5000/uploads/${item.gambar}`}
                  alt={item.judul}
                />
              )}
              <h3>{item.judul}</h3>
              <p>{item.isi}</p>
              <small>{new Date(item.tanggal).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <p>Belum ada berita</p>
        )}
      </div>
    </div>
  );
}

export default News;
