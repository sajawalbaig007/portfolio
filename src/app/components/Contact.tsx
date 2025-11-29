"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const socialLinks = [
    { icon: <IoLogoWhatsapp />, link: "https://wa.me/93208083931" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/umama-khan-339734381/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/umi_khan125" },
    { icon: <FaGithub />, link: "https://github.com/umikhannn789-crypto" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // -----------------------------------------------------
  // FORM SUBMIT FUNCTION — BACKEND SE CONNECTED
  // -----------------------------------------------------
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="bg-black text-white py-16 px-6 min-h-[80vh]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold text-purple-400">Contact Me</h2>
          <p className="text-purple-200 leading-relaxed">
            I’m available for freelance projects <br /> or full-time opportunities.
          </p>

          <div className="flex flex-col gap-2">
            <p className="text-white">
              📞 Phone:{" "}
              <a
                href="tel:+923208083931"
                className="text-purple-400 hover:underline"
              >
                +92 320 8083931
              </a>
            </p>
            <p className="text-white">
              📧 Email:{" "}
              <a
                href="mailto:umikhannn789@gmail.com"
                className="text-purple-400 hover:underline"
              >
                umikhannn789@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-5 mt-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-black transition-all shadow-lg text-3xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 w-full md:w-[90%] mx-auto">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center md:text-left">
            Send Me a Message
          </h3>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.name}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              value={form.email}
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              value={form.message}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 h-28 resize-none"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all mt-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-purple-300">{status}</p>
          )}
        </div>
      </div>

      <div className="text-center text-purple-200 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Umama Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
