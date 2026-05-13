"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import InstagramEmbedCard from "./InstagramEmbedCard";

const berita = [
  {
    url: "https://www.instagram.com/reel/DX6jxugTB5I/",
    title: "Info Banjir Ciledug",
    category: "Bencana",
    description: "Hujan deras mengguyur wilayah Ciledug siang ini mengakibatkan genangan air di beberapa titik rawan. Harap berhati-hati dan cari jalan alternatif.",
    date: "",
    hashtags: ["banjir", "ciledug", "info"]
  },
  {
    url: "https://www.instagram.com/reel/DXA25vTkzyV/",
    title: "Berita Keributan",
    category: "Keamanan",
    description: "Terjadi keributan antar kelompok di area pasar malam. Petugas sudah turun tangan untuk menertibkan situasi. Tetap waspada jika melintas.",
    date: "",
    hashtags: ["keamanan", "puribeta"]
  },
  {
    url: "https://www.instagram.com/reel/DWFO99FE2qZ/",
    title: "Kondisi Menjelang Lebaran",
    category: "Event",
    description: "Baruuuu !!!! Warga pondok rajeg sampe ciledug turun ke jalan merayakan malam takbiran menjelang hari raya Idul Fitri.",
    date: "",
    hashtags: ["lebaran", "takbiran", "ciledug"]
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function KabarTerkiniSection() {
  return (
    <section
      id="kabar-terkini"
      className="min-h-screen py-24 bg-white relative overflow-hidden"
      aria-label="Kabar Terkini"
    >
      {/* Decorative BG */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #0057FF 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Update
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Kabar Terkini
          </h2>
          <p className="text-slate-500 text-base max-w-lg">
            Pantau situasi terbaru di Ciledug — dari banjir, keributan, hingga
            momen spesial menjelang hari raya.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {berita.map((item, i) => (
            <InstagramEmbedCard
              key={item.url}
              url={item.url}
              title={item.title}
              category={item.category}
              description={item.description}
              date={item.date}
              hashtags={item.hashtags}
              index={i}
            />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/infociledug.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            Lihat semua kabar di Instagram
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
