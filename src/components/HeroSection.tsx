"use client";

import { motion, Variants } from "framer-motion";

const particles = [
  { w: 70, h: 70, l: "10%", t: "20%" },
  { w: 40, h: 40, l: "85%", t: "15%" },
  { w: 60, h: 60, l: "70%", t: "80%" },
  { w: 30, h: 30, l: "15%", t: "75%" },
  { w: 50, h: 50, l: "40%", t: "40%" },
  { w: 45, h: 45, l: "55%", t: "90%" },
];

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0057FF 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #00C6FF 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60" />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: p.w,
            height: p.h,
            left: p.l,
            top: p.t,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="section-container w-full py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Portal Informasi Lokal Ciledug
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          >
            <span className="text-slate-900">Info</span>{" "}
            <span className="gradient-text">Ciledug</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Sumber informasi terpercaya untuk warga Ciledug. Temukan kabar terkini,
            rekomendasi kuliner, dan eksplorasi sudut kota Ciledug — semuanya di satu
            halaman.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => handleScrollTo("kabar-terkini")}
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-base hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              Lihat Kabar Terkini
            </button>
            <button
              onClick={() => handleScrollTo("kuliner")}
              className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-base border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Cari Kuliner 🍜
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            {[
              { value: "4+", label: "Kabar Terkini" },
              { value: "2+", label: "Kuliner Rekomendasi" },
              { value: "1+", label: "Lokasi Menarik" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-blue-600">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator - Hidden on mobile, visible on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
