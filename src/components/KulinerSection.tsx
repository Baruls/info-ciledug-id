"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import InstagramEmbedCard from "./InstagramEmbedCard";

const kuliner = [
  {
    url: "https://www.instagram.com/reel/DXOnYr6Exkc/",
    title: "Bakso Laris Ciledug",
    category: "Bakso",
    description: "Lagi enak enaknya makan, ternyata yang punya ??? Mirip sapa yak ??? Ada yang tau ?? Auto Laris !!!",
    date: "",
    hashtags: ["kuliner", "bakso", "viral"]
  },
  {
    url: "https://www.instagram.com/reel/DW-r1TCk5XO/",
    title: "3 Jajanan Receh Wajib Coba",
    category: "Jajanan",
    description: "Mampir ke 3 spot jajanan receh favorit di Ciledug yang rasanya juara tapi ramah di kantong!",
    date: "",
    hashtags: ["jajanan", "makanan", "ciledug"]
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function KulinerSection() {
  return (
    <section
      id="kuliner"
      className="min-h-screen py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8FAFF 0%, #EEF4FF 100%)" }}
      aria-label="Kuliner"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500"
        aria-hidden="true"
      />
      <div className="absolute top-20 left-10 text-8xl opacity-5 select-none" aria-hidden="true">🍜</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-5 select-none" aria-hidden="true">🍡</div>

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
            <span>🍴</span>
            Food & Drinks
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Kuliner <span className="gradient-text">Ciledug</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg">
            Dari bakso legendaris hingga jajanan receh yang bikin nagih — temukan
            rekomendasi terbaik dari warga untuk warga.
          </p>
        </motion.div>

        {/* Grid — centered for 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-3xl">
          {kuliner.map((item, i) => (
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

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-white border border-orange-100 shadow-sm max-w-lg mx-auto text-center"
        >
          <p className="text-slate-600 text-sm">
            🌟 Punya rekomendasi kuliner Ciledug yang ingin dikenal banyak orang?
          </p>
          <a
            href="https://www.instagram.com/infociledug.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-orange-600 font-semibold text-sm hover:underline"
          >
            Tag kami di Instagram @infociledug.id →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
