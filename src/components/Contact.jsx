import React, { useState } from 'react';
import axios from 'axios';
import Footer from './common/Footer';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gray-50 text-gray-800 pt-20">
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

      {/* Contact Form */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-3xl font-extrabold mb-6 text-center">Contact Me</h1>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
