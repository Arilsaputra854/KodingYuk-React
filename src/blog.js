import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { useMediaQuery } from "react-responsive";
import { db } from "./FirebaseConfig";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const BlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]); // Menggunakan useState untuk menyimpan data blog

  useEffect(() => {
    const fetchBlogs = async () => {
      // Membuat fungsi untuk mengambil data blog
      try {
        const coll = collection(db, "blogs"); // Mengakses koleksi 'blogs'
        const snapshot = await getDocs(coll); // Mengambil semua dokumen dalam koleksi
        const blogList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Mengambil semua data dari setiap dokumen
        }));
        setBlogs(blogList); // Menyimpan data blog ke state
      } catch (error) {
        console.error("Error fetching blogs: ", error); // Menangani kesalahan
      }
    };

    fetchBlogs(); // Memanggil fungsi fetchBlogs
  }, []);

  const truncateDescription = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const handleClick = (id) => {
    navigate(`/blog-detail/${id}`);
    console.log(id);
  };
  return (
    <>
      <div className="blog">
        <h1>Blog</h1>
        <Row gutter={[16, 16]} justify={"center"}>
          {blogs.map((post) => (
            <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
              <div
                key={post.id}
                className="blog-post"
                onClick={() => handleClick(post.id)}
              >
                <Card
                  cover={<img src={post.img_url} alt={post.img_url} />}
                  hoverable
                  style={{
                    width: "100%",
                    maxWidth: 300,
                    textAlign: "center",
                  }}
                >
                  <small>{post.date}</small>
                  <Meta
                    title={post.title}
                    description={truncateDescription(post.content, 100)}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

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
  );

};

export default BlogList;
