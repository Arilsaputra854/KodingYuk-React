import React from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Belajar React untuk Pemula",
      content:
        "React adalah library JavaScript untuk membangun antarmuka pengguna...",
      date: "2024-10-06",
      photo_url: "https://example.com/images/react-pemula.jpg",
    },
    {
      id: 2,
      title: "Menggunakan Hooks di React",
      content:
        "Hooks adalah fitur baru di React yang memungkinkan kita menggunakan state dan lifecycle tanpa menulis class...",
      date: "2024-10-05",
      photo_url: "https://example.com/images/react-hooks.jpg",
    },
    {
      id: 3,
      title: "Mengenal Component dan Props di React",
      content:
        "Component dan Props adalah dua konsep fundamental di React yang memudahkan pengembangan antarmuka pengguna...",
      date: "2024-10-04",
      photo_url: "https://example.com/images/react-components.jpg",
    },
    {
      id: 4,
      title: "React Router: Navigasi di Aplikasi Single Page",
      content:
        "React Router memungkinkan kita membuat navigasi di aplikasi React tanpa perlu reload seluruh halaman...",
      date: "2024-10-03",
      photo_url: "https://example.com/images/react-router.jpg",
    },
    {
      id: 5,
      title: "State Management di React dengan Redux",
      content:
        "Redux adalah library untuk mengelola state aplikasi yang kompleks, memudahkan kita dalam mengelola data secara global...",
      date: "2024-10-02",
      photo_url: "https://example.com/images/react-redux.jpg",
    },
    {
      id: 6,
      title: "Membangun Aplikasi React dengan TypeScript",
      content:
        "TypeScript memungkinkan kita menambahkan tipe statis ke dalam JavaScript, memudahkan penulisan kode yang lebih aman dan terstruktur...",
      date: "2024-10-01",
      photo_url: "https://example.com/images/react-typescript.jpg",
    },
    {
      id: 7,
      title: "Optimasi Performa di Aplikasi React",
      content:
        "Dalam aplikasi besar, penting untuk mengoptimalkan performa agar aplikasi tetap cepat dan responsif...",
      date: "2024-09-30",
      photo_url: "https://example.com/images/react-performance.jpg",
    },
    {
      id: 8,
      title: "Mengenal Context API di React",
      content:
        "Context API memungkinkan kita untuk berbagi data antar komponen tanpa harus melalui props secara manual di setiap level...",
      date: "2024-09-29",
      photo_url: "https://example.com/images/react-context.jpg",
    },
    {
      id: 9,
      title: "Membuat Form Dinamis di React",
      content:
        "React memudahkan kita membuat form yang dinamis dengan pengelolaan state dan validasi input secara mudah...",
      date: "2024-09-28",
      photo_url: "https://example.com/images/react-forms.jpg",
    },
    {
      id: 10,
      title: "Pengenalan Server-Side Rendering di React",
      content:
        "Server-side rendering (SSR) membantu kita meningkatkan performa dan SEO pada aplikasi React dengan merender halaman di server...",
      date: "2024-09-27",
      photo_url: "https://example.com/images/react-ssr.jpg",
    },
  ];

  const handleClick = (id) => {
    navigate("/blog-detail/${id}");
    console.log(id)
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div>
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post" onClick={()=>handleClick(post.id)}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
