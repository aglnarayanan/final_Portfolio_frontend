import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import Footer from './common/Footer';
import { auth } from "../config/firebase";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user.uid);
        if (user.uid === "KkYFMgkAxPRPw1j4X9KuDMjEC3K3") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } else {
        setAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }, []);

  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`);
      if (response.status === 200) {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      }
    } catch (error) {
      console.error('Error liking the blog post:', error);
    }
  };

  const handleNewBlogSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const likes = 0;

    axios.post("http://localhost:5000/api/blogs", { newTitle, date, newContent, likes })
      .then(() => {
        axios.get("http://localhost:5000/api/blogs")
          .then((res) => {
            setBlogs(res.data);
          })
          .catch(() => {
            console.log("Error fetching data");
          });
      });

    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="relative pt-20 min-h-screen overflow-hidden bg-gray-50 text-gray-800">
      <style>
        {`
          .background-blur::before {
            content: "";
            position: absolute;
            top: -20%;
            left: -20%;
            width: 140%;
            height: 140%;
            background: radial-gradient(at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
                        radial-gradient(at 70% 40%, rgba(173, 216, 230, 0.4) 0%, transparent 50%),
                        radial-gradient(at 50% 80%, rgba(221, 160, 221, 0.4) 0%, transparent 50%);
            filter: blur(120px);
            z-index: 0;
          }
        `}
      </style>

      {/* Blurred pastel background */}
      <div className="background-blur"></div>

      <div className="relative z-10">
        <h2 className="text-center text-5xl font-bold mb-14">
          Latest <span className='text-orange-400'>Blogs</span> 📚
        </h2>

        {admin && (
          <div className="blog-creation-form mb-8 w-4/5 mx-auto">
            <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="p-2 border rounded"
                required
              />
              <textarea
                placeholder="Blog Content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="p-2 border rounded"
                rows="4"
                required
              />
              <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
                Add Blog
              </button>
            </form>
          </div>
        )}

        <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
              <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
              <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
              <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>
              <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
              <span className="ml-2">{blog.likes} Likes</span>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Blogs;
