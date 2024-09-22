import logo from "./assets/logo.png";
import woman from "./assets/woman.png";
import picture1 from "./assets/picture_1.png";
import picture2 from "./assets/picture_2.png";
import picture3 from "./assets/picture_3.png";
import picture4 from "./assets/picture_4.png";
import picture5 from "./assets/picture_5.png";
import picture6 from "./assets/picture_6.png";
import picture7 from "./assets/picture_7.png";
import python_logo from "./assets/python_logo.png";
import mrt_logo from "./assets/mrt_logo.png";
import scratch_logo from "./assets/scratch_logo.png";
import "./App.css";
import "./navbar.css";
import { useState } from "react";

function NavBar(params) {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo kodingyuk"></img>
      </div>
      <ul
        className={isMobile ? "navbar-links-mobile" : "navbar-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="#home">Home</a>
          <a href="#kelas">Kelas</a>
          <a href="#about">About</a>
          <a href="#e-course">E-Course</a>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-body">
        <div className="headline">
          <h2>
            Gali <b>Potensi</b> Masa Depan Anak Dengan <b>Koding & Robotik</b>
          </h2>
          <h3 id="caption">
            Belajar koding dan robotik dengan cara menyenangkan, interaktif, dan
            relevan untuk anak-anak dan remaja.
          </h3>
          <h3 id="cek-button">Cek Sekarang!</h3>
        </div>
        <img src={woman} alt="Woman" id="woman_photo"></img>
      </main>
      <main className="App-about">
        <h2>Tentang KodingYuk!</h2>

        <p>
          Kodingyuk merupakan kursus koding dan robotik yang berfokus pada
          menggali potensi anak dalam bidang teknologi. Kodingyuk membantu
          anak-anak memahami konsep teknologi secara mendalam, mempersiapkan
          mereka untuk menghadapi tantangan di masa depan.
        </p>
        <div className="foto-murid">
          <img src={picture4} alt="foto siswa" id="foto4"></img>
          <div className="foto-murid-polaroid">
            <img src={picture3} alt="foto siswa" id="foto3"></img>
            <img src={picture1} alt="foto siswa" id="foto1"></img>
          </div>
          <img src={picture2} alt="foto siswa" id="foto2"></img>
        </div>
      </main>
      <main className="App-reason">
        <div className="list-reason">
          <h2>Kenapa pilih KodingYuk?</h2>
          <ul>
            <li>Kurikulum Mudah Dipahami:</li>
            <p>
              Kurikulum kami dirancang agar mudah dipahami oleh anak-anak,
              sehingga mereka dapat belajar dengan lebih efektif dan
              menyenangkan.
            </p>
            <li>Kesempatan Lomba Nasional & Internasional: </li>
            <p>
              Siswa memiliki kesempatan untuk mengikuti lomba-lomba di tingkat
              nasional maupun internasional, memperluas wawasan dan pengalaman.
            </p>
            <li>Trainer Berpengalaman: </li>
            <p>
              Trainer kami adalah profesional yang berpengalaman dalam
              bidangnya, siap membimbing siswa hingga mencapai tujuan
              pembelajaran.
            </p>
            <li>Projek Akhir yang Aplikatif:</li>
            <p>
              Siswa akan membuat projek akhir yang dapat diaplikasikan langsung
              dalam kehidupan sehari-hari, memberikan pengalaman praktis yang
              berharga.
            </p>
          </ul>
        </div>
        <div className="foto-pemenang">
          <img src={picture5} alt="foto siswa"></img>
        </div>
      </main>
      <main className="App-program">
        <h2>Program Kami</h2>
        <div className="list-program">
          <div className="kelas-merakit">
            <img src={mrt_logo} alt="logo MRT"></img>
            <h2>Kelas Merakit Robot</h2>
            <p>
              Program ini mengajak anak-anak merakit robot dengan blok MRT,
              meningkatkan logika, kreativitas, dan keterampilan motorik halus.
            </p>
          </div>
          <div className="kelas-animasi">
            <img src={scratch_logo} alt="logo scratch"></img>
            <h2>Kelas Animasi Robotik</h2>
            <p>
            Scratch adalah platform visual yang ramah anak untuk belajar coding, memungkinkan mereka membuat game interaktif dengan kode blok yang mudah dipahami.
            </p>
          </div>
          <div className="kelas-python">
            <img src={python_logo} alt="logo python"></img>
            <h2>Kelas Koding</h2>
            <p>
            Kelas belajar Python adalah program untuk mempelajari dasar-dasar pemrograman Python, termasuk sintaks, struktur data, dan pembuatan proyek sederhana.
            </p>
          </div>
        </div>
      </main>
      <main className="App-method">
        <h2>Metode Pembelajaran</h2>
        <div className="list-method">
          <div className="kelas-offline">
            <img src={picture6} alt="logo scratch"></img>
            <h2>PRIVAT</h2>
            <p>
            Trainer akan datang ke rumah siswa untuk memberikan pembelajaran, memungkinkan bimbingan langsung dan maksimal saat siswa menghadapi kesulitan.
            </p>
          </div>
          <div className="kelas-online">
            <img src={picture7} alt="logo python"></img>
            <h2>ONLINE</h2>
            <p>
            Kelas dilakukan secara online menggunakan platform online (Google Meet atau Zoom), memungkinkan siswa belajar dari rumah dengan bimbingan langsung dari instruktur, kapanpun dan dimanapun.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
