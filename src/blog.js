import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate } from "react-router-dom";
import {collection, getDocs} from 'firebase/firestore';
import {db} from './FirebaseConfig';

const BlogList = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]); // Menggunakan useState untuk menyimpan data blog

  useEffect(() => {
    const fetchBlogs = async () => { // Membuat fungsi untuk mengambil data blog
      try {
        const coll = collection(db, "blogs"); // Mengakses koleksi 'blogs'
        const snapshot = await getDocs(coll); // Mengambil semua dokumen dalam koleksi
        const blogList = snapshot.docs.map(doc => ({
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


  const handleClick = (id) => {
    navigate("/blog-detail/${id}");
    console.log(id)
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div>
        {blogs.map((post) => (
          <div key={post.id} className="blog-post" onClick={()=>handleClick(post.id)}>
            <img src={post.img_url} alt={post.img_url}/>
            <h2>{post.title}</h2>
            <p >{post.content}</p>
            <small>{post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
