"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl font-bold text-cyan-400 mb-12 text-center"
      >
        Contact <span className="text-white">Me</span>
      </motion.h2>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-cyan-400">Get in Touch</h3>
          <p className="text-gray-300">
            Feel free to reach out for collaborations, freelance work, or just
            to say hi!
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" /> sajawalbaig007@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" /> 0306-4869689
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" /> Lahore, Pakistan
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://wa.me/923064869689"
              target="_blank"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/sajawal_baig11?igsh=aGtiZHk0N2RqZDNs"
              target="_blank"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/sajawal-baig-7429ba360"
              target="_blank"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sajawalbaig007"
              target="_blank"
              className="text-2xl hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-2 rounded-full hover:bg-transparent hover:text-white border-2 border-cyan-400 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
