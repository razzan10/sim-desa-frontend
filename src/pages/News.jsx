import { useEffect, useState } from "react";
import { getAllNews } from "../services/newsService";

function News() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllNews();
      setBerita(data);
    };
    fetchData();
  }, []);

  return (
    <section className="news">
      <h2>Berita Desa</h2>
      {berita.length === 0 ? (
        <p>Belum ada berita</p>
      ) : (
        <ul>
          {berita.map((item) => (
            <li key={item.id}>
              <h3>{item.judul}</h3>
              <p>{item.isi}</p>
              <small>{new Date(item.tanggal).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default News;
