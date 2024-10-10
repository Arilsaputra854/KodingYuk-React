import logo from "./assets/logo.png";
import woman from "./assets/woman.png";
import picture1 from "./assets/picture_1.png";
import picture2 from "./assets/picture_2.png";
import picture3 from "./assets/picture_3.png";
import picture4 from "./assets/picture_4.png";
import picture6 from "./assets/picture_6.png";
import picture7 from "./assets/picture_7.png";
import pythonLogo from "./assets/python_logo.png";
import mrtLogo from "./assets/mrt_logo.png";
import scratchLogo from "./assets/scratch_logo.png";
import "./App.css";
import "./navbar.css";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Blog from "./blog.js";
import { useMediaQuery } from "react-responsive";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" >
          <img src={logo} alt="logo kodingyuk" />
        </Link>
      </div>
      <ul
        className={isMobile ? "navbar-links-mobile" : "navbar-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="/">Home</a>
          <a href="/kelas">Kelas</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
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

const AnimatedTitle = () => (
  <h2 className="animated-title">
    Gali <b>Potensi</b> Masa Depan Anak Dengan
    <br />
    <span className="changing-word">
      <TypeAnimation
        sequence={["Koding", 2000, "Robotik", 2000]}
        wrapper="span"
        cursor
        repeat={Infinity}
      />
    </span>
  </h2>
);

const App = () => {
  const aboutSection = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const scrollToAbout = () => {
    aboutSection.current.scrollIntoView();
  };

  const renderMobile = () => (
    <div className="App-mobile">
      <header className="App-header-mobile">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="App-body-mobile">
                <div className="headline-mobile">
                  <AnimatedTitle />
                  <h3 id="caption-mobile">
                    Belajar koding dan robotik dengan cara menyenangkan,
                    interaktif, dan relevan untuk anak-anak dan remaja.
                  </h3>
                  <h3 id="cek-button-mobile" onClick={scrollToAbout}>
                    Cek Sekarang!
                  </h3>
                </div>
                <img src={woman} alt="Woman" id="woman_photo_mobile" />
              </main>
              <main className="App-about-mobile" ref={aboutSection}>
                <h2>Tentang KodingYuk!</h2>
                <p>
                  Kodingyuk merupakan kursus koding dan robotik yang berfokus
                  pada menggali potensi anak dalam bidang teknologi. Kodingyuk
                  membantu anak-anak memahami konsep teknologi secara mendalam,
                  mempersiapkan mereka untuk menghadapi tantangan di masa depan.
                </p>
                <div className="foto-murid-mobile">
                  <div className="foto-murid-polaroid">
                    <img src={picture3} alt="foto siswa" id="foto3" />
                    <img src={picture1} alt="foto siswa" id="foto1" />
                  </div>
                </div>
              </main>
              <main className="App-reason-mobile">
                <div className="list-reason-mobile">
                  <h2>Kenapa pilih KodingYuk?</h2>
                  <ul>
                    <li>Kurikulum Mudah Dipahami:</li>
                    <p>
                      Kurikulum kami dirancang agar mudah dipahami oleh
                      anak-anak.
                    </p>
                    <li>Kesempatan Lomba Nasional & Internasional:</li>
                    <p>
                      Siswa memiliki kesempatan untuk mengikuti lomba-lomba di
                      tingkat nasional maupun internasional.
                    </p>
                    <li>Trainer Berpengalaman:</li>
                    <p>
                      Trainer kami siap membimbing siswa hingga mencapai tujuan
                      pembelajaran.
                    </p>
                    <li>Projek Akhir yang Aplikatif:</li>
                    <p>
                      Siswa akan membuat projek akhir yang dapat diaplikasikan
                      langsung dalam kehidupan sehari-hari.
                    </p>
                  </ul>
                </div>
              </main>
              <main className="App-program-mobile">
                <h2>Program Kami</h2>
                <div className="list-program-mobile">
                  <div className="kelas-merakit-mobile">
                    <img src={mrtLogo} alt="logo MRT" />
                    <h2>Kelas Merakit Robot</h2>
                    <p>Mengajak anak-anak merakit robot dengan blok MRT.</p>
                  </div>
                  <div className="kelas-animasi-mobile">
                    <img src={scratchLogo} alt="logo Scratch" />
                    <h2>Kelas Animasi Robotik</h2>
                    <p>Menggunakan platform visual Scratch yang ramah anak.</p>
                  </div>
                  <div className="kelas-python-mobile">
                    <img src={pythonLogo} alt="logo Python" />
                    <h2>Kelas Koding</h2>
                    <p>Mempelajari dasar-dasar pemrograman Python.</p>
                  </div>
                </div>
              </main>
              <main className="App-method-mobile">
                <h2>Metode Pembelajaran</h2>
                <div className="list-method-mobile">
                  <div className="kelas-offline-mobile">
                    <img src={picture6} alt="Offline" />
                    <h2>PRIVAT</h2>
                    <p>
                      Trainer akan datang ke rumah siswa untuk pembelajaran
                      langsung.
                    </p>
                  </div>
                  <div className="kelas-online-mobile">
                    <img src={picture7} alt="Online" />
                    <h2>ONLINE</h2>
                    <p>
                      Kelas dilakukan secara online menggunakan platform Google
                      Meet atau Zoom.
                    </p>
                  </div>
                </div>
              </main>
              <main className="App-registration">
                <h2>Tertarik?</h2>
                <p>
                  Daftar sekarang dan mulai petualangan seru buat mengasah
                  kreativitas, logika, dan skill teknologi anak ayah dan bunda!
                </p>
                <div className="button-mobile">
                  <a href="https://forms.gle/6Vx2F6suzEEk4PHU6">
                    Daftar Sekarang!
                  </a>
                </div>
                <div className="footer">
                  <ul>
                    <a href="https://www.instagram.com/kodingyuk.id/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61565772189737">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </ul>
                </div>
              </main>
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );

  const renderDesktop = () => (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="App-body">
                <div className="headline">
                  <AnimatedTitle />
                  <h3 id="caption">
                    Belajar koding dan robotik dengan cara menyenangkan.
                  </h3>
                  <h3 id="cek-button" onClick={scrollToAbout}>
                    Cek Sekarang!
                  </h3>
                </div>
                <img src={woman} alt="Woman" id="woman_photo" />
              </main>
              <main className="App-about" ref={aboutSection}>
                <h2>Tentang KodingYuk!</h2>
                <p>
                  Kodingyuk merupakan kursus koding dan robotik yang berfokus
                  pada menggali potensi anak dalam bidang teknologi.
                </p>
                <div className="foto-murid">
                  <img src={picture4} alt="foto siswa" id="foto4" />
                  <div className="foto-murid-polaroid">
                    <img src={picture3} alt="foto siswa" id="foto3" />
                    <img src={picture1} alt="foto siswa" id="foto1" />
                  </div>
                  <img src={picture2} alt="foto siswa" id="foto2" />
                </div>
              </main>
              <main className="App-reason">
                <div className="list-reason">
                  <h2>Kenapa pilih KodingYuk?</h2>
                  <ul>
                    <li>Kurikulum Mudah Dipahami:</li>
                    <p>
                      Kurikulum kami dirancang agar mudah dipahami oleh
                      anak-anak.
                    </p>
                    <li>Kesempatan Lomba Nasional & Internasional:</li>
                    <p>
                      Siswa memiliki kesempatan untuk mengikuti lomba-lomba di
                      tingkat nasional maupun internasional.
                    </p>
                    <li>Trainer Berpengalaman:</li>
                    <p>
                      Trainer kami siap membimbing siswa hingga mencapai tujuan
                      pembelajaran.
                    </p>
                    <li>Projek Akhir yang Aplikatif:</li>
                    <p>
                      Siswa akan membuat projek akhir yang dapat diaplikasikan
                      langsung dalam kehidupan sehari-hari.
                    </p>
                  </ul>
                </div>
              </main>
              <main className="App-program">
                <h2>Program Kami</h2>
                <div className="list-program">
                  <div className="kelas-merakit">
                    <img src={mrtLogo} alt="logo MRT" />
                    <h2>Kelas Merakit Robot</h2>
                    <p>Mengajak anak-anak merakit robot dengan blok MRT.</p>
                  </div>
                  <div className="kelas-animasi">
                    <img src={scratchLogo} alt="logo Scratch" />
                    <h2>Kelas Animasi Robotik</h2>
                    <p>Menggunakan platform visual Scratch yang ramah anak.</p>
                  </div>
                  <div className="kelas-python">
                    <img src={pythonLogo} alt="logo Python" />
                    <h2>Kelas Koding</h2>
                    <p>Mempelajari dasar-dasar pemrograman Python.</p>
                  </div>
                </div>
              </main>
              <main className="App-method">
                <h2>Metode Pembelajaran</h2>
                <div className="list-method">
                  <div className="kelas-offline">
                    <img src={picture6} alt="Offline" />
                    <h2>PRIVAT</h2>
                    <p>
                      Trainer akan datang ke rumah siswa untuk pembelajaran
                      langsung.
                    </p>
                  </div>
                  <div className="kelas-online">
                    <img src={picture7} alt="Online" />
                    <h2>ONLINE</h2>
                    <p>
                      Kelas dilakukan secara online menggunakan platform Google
                      Meet atau Zoom.
                    </p>
                  </div>
                </div>
              </main>
              <main className="App-registration">
                <h2>Tertarik?</h2>
                <p>
                  Daftar sekarang dan mulai petualangan seru buat mengasah
                  kreativitas, logika, dan skill teknologi anak ayah dan bunda!
                </p>
                <div className="button">
                  <a href="https://forms.gle/6Vx2F6suzEEk4PHU6">
                    Daftar Sekarang!
                  </a>
                </div>
              </main>
              <footer className="footer">
                <ul>
                  <a href="https://www.instagram.com/kodingyuk.id/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61565772189737">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </ul>
              </footer>
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );

  return <Router>{isTabletOrMobile ? renderMobile() : renderDesktop()}</Router>;
};

export default App;
