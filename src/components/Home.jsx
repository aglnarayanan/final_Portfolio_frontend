import React from 'react';
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import EXPRESS from "../assets/express.png";
import TAILWIND from "../assets/tailwind.png";
import MONGO from "../assets/mongodb.png";
import FIREBASE from "../assets/firebase.png";
import GIT from "../assets/git.png";
import GITHUB from "../assets/github.png";
import VSCODE from "../assets/vscode.png";
import VERCEL from "../assets/vercel.png";
import P4 from "../assets/p4.jpg"; // Apple Clone
import P5 from "../assets/p5.png"; // Weather App
import P6 from "../assets/p6.png"; // E-Commerce
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer';

function Home() {
  const navigate = useNavigate();

  const skills = [
    HTML, CSS, JS, REACTICON, TAILWIND, NODE, EXPRESS, MONGO, FIREBASE, GIT, GITHUB, VSCODE, VERCEL
  ];

  return (
    <div className="relative pt-20 min-h-screen overflow-hidden bg-gray-50 text-gray-800">
      <style>
        {`
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
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
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-4 w-full sm:max-w-7xl mx-auto">
          <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold pb-2 text-gray-900">Hey! I Am</h2>
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent py-2">
              Lakshmi Narayanan
            </h2>

            <p className="py-4 text-gray-700 leading-relaxed">
              A passionate Full Stack Developer building beautiful and functional web applications.
            </p>

            <button
              onClick={() => navigate("/projects")}
              className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              View Projects
            </button>
          </div>

          <div className="mt-8 sm:mt-0 sm:ml-12 relative">
            <div className="w-60 md:w-80 h-60 md:h-80 rounded-full bg-gradient-to-tr from-purple-400 via-indigo-500 to-blue-500 p-1 animate-float shadow-2xl">
              <img
                src={BlogProfileImage}
                className="w-full h-full object-cover rounded-full border-4 border-white"
                alt="Lakshmi Narayanan"
              />
            </div>
          </div>
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center flex-wrap gap-6 py-12 w-full">
          {skills.map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="w-12 hover:scale-110 transition duration-300"
              alt="Skill"
            />
          ))}
        </div>

        {/* Services Section */}
        <div className="flex flex-col sm:flex-row mt-12 items-center justify-around px-4 w-full sm:max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="border-[6px] rounded-lg border-purple-400 p-5 border-t-0 w-60 text-center bg-white/50 backdrop-blur-md">
              <div className="rounded-full border-2 p-5 font-bold text-white bg-gradient-to-br from-purple-400 to-purple-600 shadow-md">6</div>
              <p className="mt-2 font-medium text-gray-800">Projects Completed</p>
            </div>
            <div className="border-[6px] rounded-lg border-green-400 p-5 border-t-0 w-60 text-center bg-white/50 backdrop-blur-md">
              <div className="rounded-full border-2 p-5 font-bold text-white bg-gradient-to-br from-green-400 to-green-600 shadow-md">6</div>
              <p className="mt-2 font-medium text-gray-800">Months of Experience</p>
            </div>
          </div>

          <div className="mt-10 sm:mt-0 sm:ml-8 text-center sm:text-left">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900">My Awesome</h2>
            <h2 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text text-transparent mt-2">
              Services
            </h2>
            <p className="mt-4 mb-6 text-gray-700">I have attached my resume here for your reference.</p>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-gradient-to-r from-green-400 to-lime-400 text-gray-900 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-20 px-4 w-full sm:max-w-7xl mx-auto">
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
            Checkout My Live <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Projects</span> Here
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://apple-clone-delta-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={P4} className="w-64 border border-gray-200 rounded-xl shadow hover:scale-105 transition cursor-pointer" alt="Apple Clone" />
            </a>
            <a href="http://weather-app-mu-one-92.vercel.app" target="_blank" rel="noopener noreferrer">
              <img src={P5} className="w-64 border border-gray-200 rounded-xl shadow hover:scale-105 transition cursor-pointer" alt="Weather App" />
            </a>
            <a href="http://e-commerce-a2y7.vercel.app" target="_blank" rel="noopener noreferrer">
              <img src={P6} className="w-64 border border-gray-200 rounded-xl shadow hover:scale-105 transition cursor-pointer" alt="E-Commerce" />
            </a>
          </div>
        </div>

        {/* Blog Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center my-20 px-4 w-full sm:max-w-7xl mx-auto">
          <div className="hidden sm:block">
            <img src={BlogImage} className="w-60 md:w-80 rounded-xl shadow-lg" alt="Blog" />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left mt-8 sm:mt-0 sm:ml-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 pb-2">I like to Write</h2>
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent py-2">Blogs about tech</h2>
            <p className="py-4 text-gray-700">You can know better about me by reading my blogs here. I share my expertise here.</p>
            <button
              onClick={() => navigate("/blogs")}
              className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              Read My Blogs
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
