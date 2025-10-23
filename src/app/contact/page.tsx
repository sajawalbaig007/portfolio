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
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  // ✅ FIXED: added proper type for event
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // 1️⃣ Send message to YOU
      await emailjs.send(
        "service_h0e2nwd", // service ID
        "template_yd3gv95", // template for your inbox
        form,
        "YmnLO1jrkdhw_ycXX" // public key
      );

      // 2️⃣ Auto-reply to CUSTOMER
      await emailjs.send(
        "service_h0e2nwd", // same service
        "template_m2tui91", // your auto-reply template ID
        form,
        "YmnLO1jrkdhw_ycXX"
      );

      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

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
        {/* LEFT SIDE INFO */}
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

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-6 border border-gray-700 w-full max-w-md mx-auto"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                     focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500
                     focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className="px-4 py-3 h-32 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 resize-none
                     focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full font-semibold py-3 rounded-full border-2 transition-all duration-300 shadow-md
              ${
                isSending
                  ? "bg-gray-600 text-gray-300 border-gray-600 cursor-not-allowed"
                  : "bg-cyan-400 text-black hover:bg-transparent hover:text-white border-cyan-400 hover:shadow-cyan-400/30"
              }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
