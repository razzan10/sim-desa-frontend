import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>DesaKu</h1>
      <ul className="navbar-menu">
        <li>
          <button className="NonDropDown">Beranda</button>
        </li>

        <li>
          <button className="DropDown">Profil Desa</button>
          <ul className="DropDown-Content">
            <li>
              <a href="#">Visi Misi</a>
            </li>
            <li>
              <a href="#">Sejarah</a>
            </li>
            <li>
              <a href="#">Peta Desa</a>
            </li>
            <li>
              <a href="#">Struktur Organisasi Desa</a>
            </li>
            <li>
              <a href="#">Potensi Alam</a>
            </li>
            <li>
              <a href="#">Produk Desa</a>
            </li>
            <li>
              <a href="#">Fasilitas Umum</a>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">PPID</button>
          <ul className="DropDown-Content">
            <li>
              <a href="#">Profil PPID</a>
            </li>
            <li>
              <a href="#">Maklumat Pelayanan</a>
            </li>
            <li>
              <a href="#">Jenis Informasi Desa</a>
            </li>
            <li>
              <a href="#">Struktur PPID</a>
            </li>
            <li>
              <a href="#">Regulasi PPID</a>
            </li>
            <li>
              <a href="#">Panduan Pelayan Desa</a>
            </li>
            <li>
              <a href="#">Alur Permohonan</a>
            </li>
            <li>
              <a href="#">Pengajuan Keberatan</a>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Lembaga</button>
          <ul className="DropDown-Content">
            <li>
              <a href="#">BPD</a>
            </li>
            <li>
              <a href="#">LPM</a>
            </li>
            <li>
              <a href="#">PKK</a>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Informasi</button>
          <ul className="DropDown-Content">
            <li>
              <a href="#">Berita Desa</a>
            </li>
            <li>
              <a href="#">Data Desa</a>
            </li>
          </ul>
        </li>

        <li>
          <button className="DropDown">Publikasi</button>
          <ul className="DropDown-Content">
            <li>
              <a href="#">APBDes</a>
            </li>
            <li>
              <a href="#">RPJMDes</a>
            </li>
            <li>
              <a href="#">RKPDes</a>
            </li>
            <li>
              <a href="#">RAPBDes</a>
            </li>
            <li>
              <a href="#">Alokasi Dana Desa</a>
            </li>
            <li>
              <a href="#">Dana Desa</a>
            </li>
            <li>
              <a href="#">Produk Hukum</a>
            </li>
            <li>
              <a href="#">SK Kepala Desa</a>
            </li>
          </ul>
        </li>

        <li>
          <button className="NonDropDown">Administrasi</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
