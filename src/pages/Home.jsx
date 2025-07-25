import RazzanPic from "../assets/razzanRianda.jpeg";
import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Selamat Datang
        </motion.h2>
        <p className="section-subtitle">
          sambutan Kepala Desa SIMULASI WEB DESA
        </p>

        <div className="about-content">
          <div className="about-img">
            <img src={RazzanPic} alt="foto razzan" />
          </div>
          <div className="about-text">
            <motion.p
              className="section-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Assalamu’alaikum warahmatullahi wabarakatuh, Salam sejahtera bagi
              kita semua, Dengan penuh rasa syukur, saya menyambut seluruh warga
              dan pengunjung di website resmi Desa Digital. Website ini kami
              hadirkan sebagai wujud keterbukaan informasi dan upaya dalam
              memajukan desa menuju kemandirian berbasis teknologi. Sebagai
              Kepala Desa, saya bersama seluruh perangkat desa berkomitmen untuk
              membangun Desa Digital yang mandiri, maju, dan berdaya saing
              dengan memanfaatkan teknologi sebagai pilar utama pembangunan.
              Melalui platform ini, kami berharap dapat memberikan kemudahan
              akses informasi, pelayanan yang lebih baik, serta menjadi jembatan
              komunikasi antara pemerintah desa dan masyarakat. Mari
              bersama-sama membangun desa yang lebih maju, sejahtera, dan
              berdaya saing di era digital ini. Wassalamu’alaikum warahmatullahi
              wabarakatuh.
            </motion.p>
            <h2 className="section-title">Razzan Rianda</h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
