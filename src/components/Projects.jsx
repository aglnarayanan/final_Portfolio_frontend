import React from 'react';
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.jpg";
import P5 from "../assets/p5.png";
import P6 from "../assets/p6.png";
import Footer from './common/Footer';

export default function Projects() {
  const projects = [
    { img: P1, link: "#", title: "Actodo Management" },
    { img: P2, link: "#", title: "Udemy Clone" },
    { img: P3, link: "#", title: "Trip Advisor" },
    { img: P4, link: "https://apple-clone-delta-gold.vercel.app/", title: "Apple Clone" },
    { img: P5, link: "http://weather-app-mu-one-92.vercel.app", title: "Weather App" },
    { img: P6, link: "http://e-commerce-a2y7.vercel.app", title: "E-Commerce" },
  ];

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

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          My <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Live Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg transform group-hover:scale-105 transition duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-center font-semibold text-gray-700">{project.title}</p>
            </a>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
