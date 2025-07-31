import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>DesaKu</h1>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="NonDropDown">
            Beranda
          </Link>
        </li>

        <li>
          <button className="DropDown">Profil Desa</button>
          <ul className="DropDown-Content">
            <li>
              <Link to="/visi-misi">Visi Misi</Link>
            </li>
            <li>
              <Link to="/sejarah">Sejarah</Link>
            </li>
            <li>
              <Link to="/peta-desa">Peta Desa</Link>
            </li>
            <li>
              <Link to="/struktur-organisasi">Struktur Organisasi Desa</Link>
            </li>
            <li>
              <Link to="/potensi-alam">Potensi Alam</Link>
            </li>
            <li>
              <Link to="/produk-desa">Produk Desa</Link>
            </li>
            <li>
              <Link to="/fasilitas-umum">Fasilitas Umum</Link>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">PPID</button>
          <ul className="DropDown-Content">
            <li>
              <Link to="/ppid/profil">Profil PPID</Link>
            </li>
            <li>
              <Link to="/ppid/maklumat">Maklumat Pelayanan</Link>
            </li>
            <li>
              <Link to="/ppid/jenis-informasi">Jenis Informasi Desa</Link>
            </li>
            <li>
              <Link to="/ppid/struktur">Struktur PPID</Link>
            </li>
            <li>
              <Link to="/ppid/regulasi">Regulasi PPID</Link>
            </li>
            <li>
              <Link to="/ppid/panduan">Panduan Pelayan Desa</Link>
            </li>
            <li>
              <Link to="/ppid/permohonan">Alur Permohonan</Link>
            </li>
            <li>
              <Link to="/ppid/keberatan">Pengajuan Keberatan</Link>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Lembaga</button>
          <ul className="DropDown-Content">
            <li>
              <Link to="/lembaga/bpd">BPD</Link>
            </li>
            <li>
              <Link to="/lembaga/lpm">LPM</Link>
            </li>
            <li>
              <Link to="/lembaga/pkk">PKK</Link>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Informasi</button>
          <ul className="DropDown-Content">
            <li>
              <Link to="/news">Berita Desa</Link>
            </li>
            <li>
              <Link to="/data-desa">Data Desa</Link>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Publikasi</button>
          <ul className="DropDown-Content">
            <li>
              <Link to="/publikasi/apbdes">APBDes</Link>
            </li>
            <li>
              <Link to="/publikasi/rpjmdes">RPJMDes</Link>
            </li>
            <li>
              <Link to="/publikasi/rkpdes">RKPDes</Link>
            </li>
            <li>
              <Link to="/publikasi/rapbdes">RAPBDes</Link>
            </li>
            <li>
              <Link to="/publikasi/alokasi-dana">Alokasi Dana Desa</Link>
            </li>
            <li>
              <Link to="/publikasi/dana-desa">Dana Desa</Link>
            </li>
            <li>
              <Link to="/publikasi/produk-hukum">Produk Hukum</Link>
            </li>
            <li>
              <Link to="/publikasi/sk-kades">SK Kepala Desa</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/administrasi" className="NonDropDown">
            Administrasi
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
